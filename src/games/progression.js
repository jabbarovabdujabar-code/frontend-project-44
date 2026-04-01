import runGame from '../index.js';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const length = getRandomInRange(5, 10);
  const start = getRandomInRange(1, 20);
  const step = getRandomInRange(2, 5);
  const hiddenIndex = getRandomInRange(0, length - 1);
  const progression = generateProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  const question = progression.map((num, index) => (index === hiddenIndex ? '..' : String(num))).join(' ');

  return { question, correctAnswer };
};

export default function runProgressionGame() {
  runGame('What number is missing in the progression?', getQuestionAndAnswer);
}

