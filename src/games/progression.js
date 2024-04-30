import game from '../index.js';
import { getRandomNumber, generateProgression } from './utils.js';

const description = 'What number is missing in the progression?';

function getQuestionAndAnswer() {
  const length = getRandomNumber(5, 8);
  const start = getRandomNumber(1, 10);
  const increment = getRandomNumber(2, 10);

  const progression = generateProgression(increment, start, length);

  const a = getRandomNumber(0, progression.length - 1);

  const replacingElement = '..';
  progression[a] = replacingElement;

  const string = progression.join(' ');
  const question = string;

  let correctAnswer;

  for (let j = 1; j < progression.length; j += 1) {
    if (progression[a] === replacingElement && progression[0] !== replacingElement) {
      correctAnswer = progression[a - 1] + increment;
    } else {
      correctAnswer = progression[1] - increment;
    }
  }

  return [question, correctAnswer.toString()];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
