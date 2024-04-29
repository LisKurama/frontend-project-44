import game from '../index.js';

const description = 'What is the result of the expression?';

const operator = ['+', '-', '*'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestionAndAnswer() {
  const random = Math.floor(Math.random() * operator.length);
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
