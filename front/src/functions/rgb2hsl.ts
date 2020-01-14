export default (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) {
    return {h: -1, s: 0, l};
  }

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  if (max == r) {
    return {h: 60 * ((g - b) / d + (g < b ? 6 : 0)), s, l};
  }
  if (max == g) {
    return {h: 120 + 60 * (b - r) / d, s, l};
  }
  return {h: 240 + 60 * (r - g) / d, s, l};
};
