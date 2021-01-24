import { getRandomInt, getRandomProgression, playGame } from './shared.js';

export default function brainProgressionGame() {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

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

  playGame(taskDescription, gameIterationCallback);
}
