const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandom = (result) => Math.floor(Math.random() * result.length);

export { getRandomNumber, getRandom };
