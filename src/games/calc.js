import game from '../index.js';
import { getRandomNumber, getRandom } from './utils.js';

const description = 'What is the result of the expression?';

const operator = ['+', '-', '*'];

function getQuestionAndAnswer() {
  const random = getRandom(operator);
  const a = getRandomNumber(0, 10);
  const b = getRandomNumber(0, 10);
  const question = `${a} ${operator[random]} ${b}`;

  let correctAnswer;

  switch (operator[random]) {
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
      throw new Error(`Unknown order state: '${operator[random]}'!`);
  }

  return [question, correctAnswer.toString()];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
