import createTask from './task.js';

const amount = 4;
const level = 2;
const operations = ['+', '-', '*', '/'];

operations.forEach((operation) => {
  for (let i = 0; i < amount; i++) {
    console.log(createTask(operation, level));
  }
});
