import launchGame from '../launchGame.js';
import { getRandomInt, getRandomProgression } from '../helpers.js';

export default function brainProgressionGame() {
  const taskDescription = 'What number is missing in the progression?';

  const gameIterationCallback = () => {
    const progression = getRandomProgression();
    const missedProgressionItemIndex = getRandomInt(7);
    const correctAnswer = progression[missedProgressionItemIndex];
    return [
      progression
        .map((item, index) => (missedProgressionItemIndex === index ? '..' : item))
        .join(' '),
      correctAnswer,
    ];
  };

  launchGame(taskDescription, gameIterationCallback);
}
