import cluster from 'cluster';
import { createServer } from 'http';

const timeout = 30000;

if (cluster.isPrimary) {
  cluster.setupPrimary({ silent: true }); // keine Logs vom Worker

  setTimeout(cluster.disconnect, timeout);

  cluster.on('exit', function () {
    console.log(`Worker wurden nach ${timeout}ms beendet`);
  });

  cluster.fork();
  cluster.fork();
}

if (cluster.isWorker) {
  console.log(`Worker ${cluster.worker.id} gestartet`);
  createServer((req, res) => {
    console.log(`Worker ${cluster.worker.id} hat eine Anfrage erhalten`);
    res.end(`Worker ${cluster.worker.id} xxx`);
  }).listen('8080');
}
