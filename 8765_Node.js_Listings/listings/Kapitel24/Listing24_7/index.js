import { createServer } from 'http';
import { fork } from 'child_process';
import { parse } from 'url';
import { fileURLToPath } from 'url';

if (process.argv[2] === 'child') {
  const number = process.argv[3];
  let result = 1;
  const start = new Date().getTime();

  if (number !== undefined) {
    for (let i = 1; i <= number; i++) {
      result += i * i;
    }
  }

  const end = new Date().getTime();

  process.send({ time: end - start, result: result });
} else {
  createServer((req, res) => {
    const number = parse(req.url, true).query.number;

    if (number < 0 || number > 1000) {
      res.end('Please provide a number between 0 and 1000');
    }

    const child = fork(fileURLToPath(import.meta.url), ['child', number]);

    child.on('message', (data) => {
      res.end(`Time: ${data.time} Result: ${data.result}`);
    });
  }).listen(8080);
}
