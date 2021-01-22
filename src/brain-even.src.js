import greeting, { askUser } from '../cli.js';
import { getRandomInt, isEven } from './helpers.js';

const COUNT_OF_ROUNDS = 3;

const ANSWERS_MAP = {
  [true]: 'yes',
  [false]: 'no',
};

export default function startBrainEvenGame() {
  let round = 1;

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  ((function runGameIteration() {
    if (round <= COUNT_OF_ROUNDS) {
      round += 1;
      const randomNumber = getRandomInt(24);
      const correctAnswer = isEven(randomNumber);
      const userAnswer = askUser(`Question: ${randomNumber} `);

      if (ANSWERS_MAP[correctAnswer] === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`
          ${userAnswer} is wrong answer ;(. Correct answer was ${ANSWERS_MAP[correctAnswer]}.
          Let's try again, ${userName}!
        `);
      }

      runGameIteration();
    }
  })());

  console.log(`Congratulations, ${userName}!`);
}
