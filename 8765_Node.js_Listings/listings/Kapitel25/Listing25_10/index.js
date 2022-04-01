import { fork } from 'child_process';

const child1 = fork('logic.js');
const child2 = fork('logic.js');

function childProcessReceiver(child) {
  return new Promise((resolve, reject) => {
    child.on('message', (data) => {
      resolve(data);
    });
    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function handleResults(childProcess1, childProcess2) {
  const results = await Promise.all([
    childProcessReceiver(childProcess1),
    childProcessReceiver(childProcess2),
  ]);

  console.log(`Die Summe ist: ${results[0] + results[1]}`);
}

handleResults(child1, child2);
