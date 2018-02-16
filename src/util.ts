export function formatCode(str: string) {
  return str.replace(/ /g, '<span class="white-space space"></span>');
};

export function center(str: string, len: number) {
  if (str.length >= len) {
    return str;
  } else {
    const padTotal = len - str.length;
    const padStart = Math.floor(padTotal / 2) + 1;
    const padEnd = Math.ceil(padTotal / 2) + 1;
    return new Array(padStart).join(' ') + str + new Array(padEnd).join(' ');
  }
};

export function track(action: string, value: string){
  try {
    (<any>window)._gaq.push(['_trackEvent', action, value]);
  } catch (error) { }
}

export function snakeCase(str: string): string {
  return str.replace(/([A-Z])/g, (x, y) => '_' + y.toLowerCase());
}

export enum Easing {
  Linear,
  EaseIn,
  EaseOut,
  EaseInOut,
};

const easings: {[key: number]: (factor: number) => number } = {
  [Easing.Linear]: (factor: number) => factor,
  [Easing.EaseIn]: (factor: number) => Math.pow(factor, 2),
  [Easing.EaseOut]: (factor: number) => 1 - Math.abs(Math.pow(factor - 1, 2)),
  [Easing.EaseInOut]: (factor: number) => {
    if (factor < 0.5) {
      return easings[Easing.EaseIn](factor * 2) / 2;
    } else {
      return easings[Easing.EaseOut](factor * 2 - 1) / 2 + 0.5;
    }
  },
};

export interface AnimationOptions {
  target: { [key: string]: any },
  key: string,
  value: number,
  duration?: number,
  ease?: Easing,
};

export function animate(options: AnimationOptions) {
  options.duration = options.duration || 500;
  options.ease = options.ease || Easing.Linear;
  const startValue: number = options.target[options.key] || 0;
  const startTime = Date.now();
  const endTime = startTime + options.duration;
  const difference = options.value - startValue;
  function step() {
    const now = Date.now();
    if (now >= endTime) {
      options.target[options.key] = options.value;
    } else {
      const factor = easings[options.ease]((now - startTime) / options.duration);
      const value = startValue + difference * factor;
      options.target[options.key] = value;
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
};
