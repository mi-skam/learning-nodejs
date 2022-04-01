import { createInterface } from 'readline';
import createTask from './task.js';
import promisedQuestion from './promisedQuestion.js';

const amount = 4;
const level = 2;
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
    console.log('Korrekt!');
  } else {
    console.log('Falsch');
  }
  if (++index < tasks.length) {
    question(index);
  } else {
    rl.close();
  }
}

question(0);
