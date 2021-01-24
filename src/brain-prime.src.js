import {
  getRandomInt,
  isPrime,
  playGame,
  YES_OR_NO_ANSWERS_MAP,
} from './shared.js';

export default function brainPrimeGame() {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameIterationCallback = () => {
    const randomNumber = getRandomInt(24);
    const correctAnswer = isPrime(randomNumber);
    return [randomNumber, YES_OR_NO_ANSWERS_MAP[correctAnswer]];
  };

  playGame(taskDescription, gameIterationCallback);
}
