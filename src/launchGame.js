import greeting, { askUser } from './cli.js';
import { COUNT_OF_ROUNDS } from './constants.js';

export default function launchGame(taskDescription = '', gameIterationCallback = () => null) {
  let round = 1;

  const userName = greeting();
  console.log(taskDescription);

  ((function performGameIteration() {
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
        return;
      }

      performGameIteration();
    }
  })());

  if (round > COUNT_OF_ROUNDS) {
    console.log(`Congratulations, ${userName}!`);
  }
}
