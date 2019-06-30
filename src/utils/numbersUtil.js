export const formatSeconds = number => {
  const padZero = (number, size) => {
    let s = String(number);
    while (s.length < size) {
      s = `0${s}`;
    }
    return s;
  };
  const minutes = padZero(Math.floor(number / 60), 2);
  const seconds = padZero(number % 60, 2);
  return `${minutes}:${seconds}`;
};
