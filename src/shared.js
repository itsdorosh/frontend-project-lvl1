import greeting, { askUser } from '../cli.js';

export const COUNT_OF_ROUNDS = 3;
export const PROGRESSION_LENGTH = 10;

export const YES_OR_NO_ANSWERS_MAP = {
  [true]: 'yes',
  [false]: 'no',
};

export function isEven(number) {
  return number % 2 === 0;
}

export function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

export function gcd(first, second) {
  if (second > first) return gcd(second, first);
  if (!second) return first;
  return gcd(second, first % second);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

export function getRandomProgression() {
  const magnifier = getRandomInt(8);
  const result = [getRandomInt(24)];

  for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
    result.push(result[i - 1] + magnifier);
  }

  return result;
}

export function processNumbers(left, right) {
  const operators = '+-*/';
  const operatorIndex = getRandomInt(3) - 1;
  const randomSelectedOperator = operators[operatorIndex];

  switch (randomSelectedOperator) {
    case '+': return [left + right, randomSelectedOperator];
    case '-': return [left - right, randomSelectedOperator];
    case '*': return [left * right, randomSelectedOperator];
    case '/': return [left / right, randomSelectedOperator];
    default: return [left + right, randomSelectedOperator];
  }
}

export function playGame(taskDescription = '', gameIterationCallback = () => null) {
  let round = 1;

  const userName = greeting();
  console.log(taskDescription);

  ((function runGameIteration() {
    if (round <= COUNT_OF_ROUNDS) {
      round += 1;

      const [question, correctAnswer] = gameIterationCallback();
      const userAnswer = askUser(`Question: ${question} `);

      if (correctAnswer.toString() === userAnswer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`
${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!
        `);
      }

      runGameIteration();
    }
  })());

  console.log(`Congratulations, ${userName}!`);
}
