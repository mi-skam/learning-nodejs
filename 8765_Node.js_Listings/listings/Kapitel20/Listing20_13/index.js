import { connect, createServer } from 'net';

const client = connect({ host: '127.0.0.1', port: 8080 }, () => {
  createServer((socket) => {
    client.on('data', (data) => {
      // calculate

      const flushed = socket.write(data);

      if (!flushed) {
        client.pause();
      }
    });

    socket.on('drain', () => {
      client.resume();
    });
  }).listen(8181, '127.0.0.1');
});
