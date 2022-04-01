import { parentPort, workerData } from 'worker_threads';

let n = 1;
let results = 0;

outerLoop: while (results <= 1000) {
  n += 1;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      continue outerLoop;
    }
  }
  workerData[results] = n;
  results += 1;
}

parentPort.postMessage('ready');

process.exit();
