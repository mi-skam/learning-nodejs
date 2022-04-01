import { createReadStream, createWriteStream } from 'fs';

const readable = createReadStream('input.txt');
const writable = createWriteStream('output.txt');

writable.on('pipe', (readstream) => {
  console.log('pipe handler called');
});

writable.on('unpipe', (readstream) => {
  console.log('unpipe handler called');
});

writable.on('finish', () => {
  console.log('finish handler called');
});

readable.pipe(writable);

/* Ausgabe:
pipe handler called
finish handler called
unpipe handler called
*/
