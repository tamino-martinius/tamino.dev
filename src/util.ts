export function formatCode(str: string) {
  return str.replace(/ /g, '<span class="white-space space"></span>');
}

export function center(str: string, len: number) {
  if (str.length >= len) {
    return str;
  } else {
    const padTotal = len - str.length;
    const padStart = Math.floor(padTotal / 2) + 1;
    const padEnd = Math.ceil(padTotal / 2) + 1;
    return new Array(padStart).join(" ") + str + new Array(padEnd).join(" ");
  }
}

export function snakeCase(str: string): string {
  return str.replace(/([A-Z])/g, (_x, y) => `_${y.toLowerCase()}`);
}

export enum Easing {
  Linear,
  EaseIn,
  EaseOut,
  EaseInOut,
}

const easings: { [key: number]: (factor: number) => number } = {
  [Easing.Linear]: (factor: number) => factor,
  [Easing.EaseIn]: (factor: number) => factor ** 2,
  [Easing.EaseOut]: (factor: number) => 1 - Math.abs((factor - 1) ** 2),
  [Easing.EaseInOut]: (factor: number) => {
    if (factor < 0.5) {
      return easings[Easing.EaseIn](factor * 2) / 2;
    } else {
      return easings[Easing.EaseOut](factor * 2 - 1) / 2 + 0.5;
    }
  },
};

export interface AnimationOptions {
  // biome-ignore lint/suspicious/noExplicitAny: target is a DOM element with dynamic property access
  target: Record<string, any>;
  key: string;
  value: number;
  duration?: number;
  ease?: Easing;
}

export function animate(options: AnimationOptions) {
  const duration = options.duration || 500;
  const ease = options.ease ?? Easing.Linear;
  const startValue: number = options.target[options.key] || 0;
  const startTime = Date.now();
  const endTime = startTime + duration;
  const difference = options.value - startValue;
  function step() {
    const now = Date.now();
    if (now >= endTime) {
      options.target[options.key] = options.value;
    } else {
      const factor = easings[ease]((now - startTime) / duration);
      const value = startValue + difference * factor;
      options.target[options.key] = value;
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
