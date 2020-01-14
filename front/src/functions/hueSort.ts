import rgb2hsl from "./rgb2hsl";

export default (a: string, b: string) => {
  if (a == b) {
    return 0;
  }
  const aRGB = {
    r: parseInt(a.substr(1, 2), 16),
    g: parseInt(a.substr(3, 2), 16),
    b: parseInt(a.substr(5, 2), 16),

  };

  const bRGB = {
    r: parseInt(b.substr(1, 2), 16),
    g: parseInt(b.substr(3, 2), 16),
    b: parseInt(b.substr(5, 2), 16),

  };

  const aHSL = rgb2hsl(aRGB.r, aRGB.g, aRGB.b);
  const bHSL = rgb2hsl(bRGB.r, bRGB.g, bRGB.b);

  if (aHSL.h < bHSL.h) {
    return -1;
  }
  if (aHSL.h > bHSL.h) {
    return 1;
  }

  if (aHSL.l < bHSL.l) {
    return 1;
  }
  if (aHSL.l > bHSL.l) {
    return -1;
  }

  if (aHSL.s < bHSL.s) {
    return -1;
  }
  if (aHSL.s > bHSL.s) {
    return 1;
  }

  return a.localeCompare(b);
};