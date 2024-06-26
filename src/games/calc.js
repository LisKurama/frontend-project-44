import game from '../index.js';
import getRandomNumber from './utils.js';

const description = 'What is the result of the expression?';

const operator = ['+', '-', '*'];

function getQuestionAndAnswer() {
  const random = operator[getRandomNumber(0, 2)];
  const a = getRandomNumber(0, 10);
  const b = getRandomNumber(0, 10);
  const question = `${a} ${random} ${b}`;

  let correctAnswer;

  switch (random) {
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    case '*':
      correctAnswer = a * b;
      break;
    default:
      throw new Error(`Unknown order state: '${random}'!`);
  }

  return [question, correctAnswer.toString()];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
