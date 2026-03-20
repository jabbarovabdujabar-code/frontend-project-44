import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export default function runEvenGame() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const questionValue = getRandomNumber();
    const correctAnswer = isEven(questionValue) ? 'yes' : 'no';

    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
