import game from '../index.js';

const description = 'What number is missing in the progression?';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestionAndAnswer() {
  const increment = getRandomNumber(2, 10);

  const result = [];
  const replacingElement = '..';

  for (let i = 1; i <= 50; i += increment) {
    result.push(i);
  }
  const a = Math.floor(Math.random() * result.length);
  result[a] = replacingElement;

  const string = result.join(' ');
  const question = string;

  let correctAnswer;

  for (let j = 1; j < result.length; j += 1) {
    if (result[a] === replacingElement && result[a] !== result[0]) {
      correctAnswer = result[a - 1] + increment;
    } else {
      correctAnswer = 1;
    }
  }

  return [question, correctAnswer.toString()];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
