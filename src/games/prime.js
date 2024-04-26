import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestionAndAnswer() {
  const question = getRandomNumber(2, 30);

  let correctAnswer;

  for (let i = 1; i < question; i += 1) {
    if (question % i === 0 && i !== 1) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
  return [question.toString(), correctAnswer];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
