// random number where the provided min/max numbers are eligible for selection
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function calculateVisibilityForFooter(
  wScroll,
  wHeight,
  fHeight,
  fTop
) {
  let hiddenAfter = fTop + fHeight - (wScroll + wHeight);

  if (wScroll > fTop + fHeight || fTop > wScroll + wHeight) {
    return 0;
  } else {
    var result = 100;

    if (hiddenAfter > 0) {
      result -= (hiddenAfter * 100) / fHeight;
    }

    return result;
  }
}
