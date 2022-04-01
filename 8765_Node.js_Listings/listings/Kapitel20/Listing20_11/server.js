import { createServer } from 'net';
import { writeFile } from 'fs';

createServer((socket) => {
  let file = '';

  socket.on('readable', () => {
    file += socket.read();
  });

  socket.on('end', () => {
    const input = Buffer.from(file, 'base64');
    writeFile('dest.png', input, () => {});
  });
}).listen(8080, '127.0.0.1');
