import runGame from '../index.js';

const getRandomNumber = (max = 100) => Math.floor(Math.random() * max) + 2; // primes start from 2

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question: String(question), correctAnswer };
};

export default function runPrimeGame() {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer);
}

