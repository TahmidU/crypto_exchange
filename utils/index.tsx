export function debounce(fn: Function, delay: number = 1000) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
