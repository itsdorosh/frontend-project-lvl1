import {
  getRandomInt,
  isEven,
  playGame,
  YES_OR_NO_ANSWERS_MAP,
} from './shared.js';

export default function brainEvenGame() {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameIterationCallback = () => {
    const possibleEvenNumber = getRandomInt(24);
    const correctAnswer = isEven(possibleEvenNumber);
    return [possibleEvenNumber, YES_OR_NO_ANSWERS_MAP[correctAnswer]];
  };

  playGame(taskDescription, gameIterationCallback);
}
