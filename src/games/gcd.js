import runGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getGcd = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return { question, correctAnswer };
};

export default function runGcdGame() {
  runGame('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
}
