import { Writable } from 'stream';

const ws = new Writable({
  write: (chunk, encoding, done) => {
    console.log('WRITE: ', chunk.toString());
    done();
  },
});

for (let i = 0; i < 10; i++) {
  ws.write('Hello ' + i);
}
ws.end();
