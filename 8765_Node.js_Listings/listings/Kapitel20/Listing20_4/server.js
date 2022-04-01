import { createServer } from 'net';
import { chmod } from 'fs';

const server = createServer((connection) => {
  connection.on('readable', (data) => {
    console.log(connection.read().toString());
  });

  connection.on('end', () => {
    console.log('connection ended');
  });
});

server.listen('/tmp/nodejs.sock', () => {
  chmod('/tmp/nodejs.sock', 0o700, () => {
    console.log('Server listening on /tmp/nodejs.sock');
  });
});
