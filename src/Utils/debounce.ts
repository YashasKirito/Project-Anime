export const debounce = (cb: (...args: any) => void, d: number) => {
  let timer: NodeJS.Timer;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), d);
  };
};
