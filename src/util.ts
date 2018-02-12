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

