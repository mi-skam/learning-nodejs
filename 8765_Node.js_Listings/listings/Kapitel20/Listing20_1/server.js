import { createServer } from 'net';

const server = createServer((connection) => {
  connection.on('readable', (data) => {
    console.log(connection.read().toString());
  });

  connection.on('end', () => {
    console.log('connection ended');
  });
});

server.listen('/tmp/nodejs.sock', () => {
  console.log('Server listening on /tmp/nodejs.sock');
});
