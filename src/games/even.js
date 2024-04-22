import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestionAndAnswer() {
  const question = getRandomNumber(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
