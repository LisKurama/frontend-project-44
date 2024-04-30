import game from '../index.js';
import { getRandomNumber } from './utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getQuestionAndAnswer() {
  const question = getRandomNumber(2, 30);

  const isPrime = (number) => {
    for (let i = 1; i < number; i += 1) {
      if (number % i === 0 && i !== 1) {
        return false;
      }
    }
    return true;
  };

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
