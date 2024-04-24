import {
  cons, car, cdr,
} from '@hexlet/pairs';

import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestionAndAnswer() {
  const pair = cons(getRandomNumber(1, 50), getRandomNumber(1, 50));
  const a = car(pair);
  const b = cdr(pair);
  const c = Math.min(a, b);
  const question = `${a} ${b}`;

  let correctAnswer = 1;

  for (let i = c; i >= 1; i -= 1) {
    if (a % i !== 0 || b % i !== 0) {
      i -= 1;
    } else {
      correctAnswer = i;
      break;
    }
  }

  return [question, correctAnswer.toString()];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
