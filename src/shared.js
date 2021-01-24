import greeting, { askUser } from '../cli.js';

const COUNT_OF_ROUNDS = 3;

export function isEven(value) {
  return value % 2 === 0;
}

export function gcd(first, second) {
  if (second > first) { return gcd(second, first); }
  if (!second) { return first; }
  return gcd(second, first % second);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

export function playGame(taskDescription = '', gameIterationCallback = () => null) {
  let round = 1;

  const userName = greeting();
  console.log(taskDescription);

  ((function runGameIteration() {
    if (round <= COUNT_OF_ROUNDS) {
      round += 1;

      const [question, correctAnswer] = gameIterationCallback();
      const userAnswer = askUser(`Question: ${question} `);

      if (correctAnswer.toString() === userAnswer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`
${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!
        `);
      }

      runGameIteration();
    }
  })());

  console.log(`Congratulations, ${userName}!`);
}
