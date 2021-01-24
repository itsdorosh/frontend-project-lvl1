import {
  getRandomInt,
  isEven,
  playGame,
  YES_OR_NO_ANSWERS_MAP,
} from './shared.js';

export default function brainEvenGame() {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameIterationCallback = () => {
    const randomNumber = getRandomInt(24);
    const correctAnswer = isEven(randomNumber);
    return [randomNumber, YES_OR_NO_ANSWERS_MAP[correctAnswer]];
  };

  playGame(taskDescription, gameIterationCallback);
}
