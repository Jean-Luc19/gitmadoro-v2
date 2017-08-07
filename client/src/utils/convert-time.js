export const convertTime = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60 === 0 ? '00' : time % 60;
  return `${minutes}:${seconds}`;
};
