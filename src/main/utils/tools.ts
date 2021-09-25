export function throttle(fn: Function, delay: number) {
  let flag = true;
  return (...args: any) => {
    if (flag) {
      flag = false;
      fn(...args);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}
