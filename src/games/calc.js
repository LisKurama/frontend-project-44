import {
  cons, car, cdr,
} from '@hexlet/pairs';
import game from '../index.js';

const description = 'What is the result of the expression?';

const operator = ['+', '-', '*'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestionAndAnswer() {
  const random = Math.floor(Math.random() * operator.length);
  const pair = cons(getRandomNumber(0, 10), getRandomNumber(0, 10));
  const a = car(pair);
  const b = cdr(pair);
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
      correctAnswer = NaN;
  }

  return [question, correctAnswer.toString()];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
