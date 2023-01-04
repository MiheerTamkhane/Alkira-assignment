export function debounce(fn, delay = 300) {
  let timeout;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(args);
      return fn.apply(this, args);
    }, delay);
  };
}
