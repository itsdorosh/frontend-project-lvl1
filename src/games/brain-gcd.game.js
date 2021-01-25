import launchGame from '../launchGame.js';
import { gcd, getRandomInt } from '../helpers.js';

export default function brainGCDGame() {
  const taskDescription = 'Find the greatest common divisor of given numbers.';

  const gameIterationCallback = () => {
    const multiplier = getRandomInt(8);
    const first = getRandomInt(20) * multiplier;
    const second = getRandomInt(20) * multiplier;
    const correctAnswer = gcd(first, second);
    return [[first, second].join(' '), correctAnswer];
  };

  launchGame(taskDescription, gameIterationCallback);
}
