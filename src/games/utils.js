export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateProgression = (increment, start, length) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    result.push(start + i * increment);
  }
  return result;
};
