import game from '../index.js';
import { getRandomNumber, getRandom } from './utils.js';

const description = 'What number is missing in the progression?';

function getQuestionAndAnswer() {
  const length = getRandomNumber(5, 8);
  const start = getRandomNumber(1, 10);
  const increment = getRandomNumber(2, 10);

  const result = [];
  const replacingElement = '..';

  for (let i = 0; i <= length; i += 1) {
    result.push(start + i * increment);
  }

  const a = getRandom(result);
  result[a] = replacingElement;

  const string = result.join(' ');
  const question = string;

  let correctAnswer;

  for (let j = 1; j < result.length; j += 1) {
    if (result[a] === replacingElement && result[0] !== replacingElement) {
      correctAnswer = result[a - 1] + increment;
    } else {
      correctAnswer = result[1] - increment;
    }
  }

  return [question, correctAnswer.toString()];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
