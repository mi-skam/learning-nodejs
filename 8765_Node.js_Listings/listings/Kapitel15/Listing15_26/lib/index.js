import { createInterface } from 'readline';
import chalk from 'chalk';
import createTask from './task.js';
import promisedQuestion from './promisedQuestion.js';
import getOptions from './getOptions.js';
import summary from './summary.js';

const { amount, level } = getOptions();

const operations = ['+', '-', '*', '/'];
const tasks = [];

operations.forEach((operation) => {
  for (let i = 0; i < amount; i++) {
    tasks.push(createTask(operation, level));
  }
});

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function question(index) {
  const result = await promisedQuestion(`${tasks[index].task} = `, rl);
  tasks[index].input = parseInt(result);
  if (tasks[index].input === tasks[index].result) {
    console.log(chalk.bold.green('Korrekt!'));
  } else {
    console.log(chalk.bold.red('Falsch'));
  }
  if (++index < tasks.length) {
    question(index);
  } else {
    console.log(summary(tasks));
    rl.close();
  }
}

question(0);
