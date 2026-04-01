import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getQuestionAndAnswer = () => {
  const questionValue = getRandomNumber();
  const question = questionValue;
  const correctAnswer = isEven(questionValue) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default function runEvenGame() {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
}
