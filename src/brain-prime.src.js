import {
  getRandomInt,
  isPrime,
  playGame,
  YES_OR_NO_ANSWERS_MAP,
} from './shared.js';

export default function brainPrimeGame() {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameIterationCallback = () => {
    const possiblePrimeNumber = getRandomInt(24);
    const correctAnswer = isPrime(possiblePrimeNumber);
    return [possiblePrimeNumber, YES_OR_NO_ANSWERS_MAP[correctAnswer]];
  };

  playGame(taskDescription, gameIterationCallback);
}
