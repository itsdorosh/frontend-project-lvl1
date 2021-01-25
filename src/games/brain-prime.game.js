import launchGame from '../launchGame.js';
import { getRandomInt, isPrime } from '../helpers.js';
import { YES_OR_NO_ANSWERS_MAP } from '../constants.js';

export default function brainPrimeGame() {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameIterationCallback = () => {
    const possiblePrimeNumber = getRandomInt(24);
    const correctAnswer = isPrime(possiblePrimeNumber);
    return [possiblePrimeNumber, YES_OR_NO_ANSWERS_MAP[correctAnswer]];
  };

  launchGame(taskDescription, gameIterationCallback);
}
