import { createServer } from 'http';

createServer((req, res) => {
  if (req.method === 'POST') {
    let command = '';
    req.on('data', (data) => {
      command += data.toString();
    });
    req.on('end', () => {
      eval(command);
      res.end();
    });
  }
}).listen(8080);

function sum(a, a, c) {
  return a + a + c;
}
sum(1, 2, 3);
