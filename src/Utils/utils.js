// random number where the provided min/max numbers are eligible for selection
// optional 3rd param, if false, will return 1 if value is 0 (doesn't allow 0 to be an answer)
export const getRandomIntInclusive = (min, max, allowZero = true) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let value = Math.floor(Math.random() * (max - min + 1)) + min;

  if (value === 0 && !allowZero) {
    return value + 1;
  } else {
    return value;
  }
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

// percentage of entire page scrolled
// https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
export function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (
    ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
  );
}
