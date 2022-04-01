import cluster from 'cluster';
import { createServer } from 'http';

if (cluster.isPrimary) {
  cluster.fork();
  cluster.fork();

  cluster.on('listening', (worker) => {
    console.log(`Worker ${worker.id} bereit`);

    setTimeout(() => {
      worker.send('Hello Primary');
    }, 2000);
  });

  for (let i in cluster.workers) {
    cluster.workers[i].on(
      'message',
      function (i, msg) {
        console.log(`Worker ${i} => Primary: ${msg}`);
      }.bind(this, i),
    );
  }
} else {
  createServer((req, res) => {
    res.end('Hello Client');
  }).listen('8080');

  cluster.worker.on('message', (msg) => {
    console.log(`Primary => Worker ${cluster.worker.id}: ${msg}`);
  });

  cluster.worker.send('Hello Primary');
}
