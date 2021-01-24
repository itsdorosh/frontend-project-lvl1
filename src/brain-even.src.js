import { getRandomInt, isEven, playGame } from './shared.js';

const ANSWERS_MAP = {
  [true]: 'yes',
  [false]: 'no',
};

export default function brainEvenGame() {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameIterationCallback = () => {
    const randomNumber = getRandomInt(24);
    const correctAnswer = isEven(randomNumber);
    return [randomNumber, ANSWERS_MAP[correctAnswer]];
  };

  playGame(taskDescription, gameIterationCallback);
}
