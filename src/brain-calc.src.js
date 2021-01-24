import {
  getRandomInt,
  processNumbers,
  playGame,
} from './shared.js';

export default function brainCalcGame() {
  const taskDescription = 'What is the result of the expression?';

  const gameIterationCallback = () => {
    const leftRandomNumber = getRandomInt(24);
    const rightRandomNumber = getRandomInt(24);
    const [correctAnswer, operator] = processNumbers(leftRandomNumber, rightRandomNumber);
    return [`${leftRandomNumber} ${operator} ${rightRandomNumber}`, correctAnswer];
  };

  playGame(taskDescription, gameIterationCallback);
}
