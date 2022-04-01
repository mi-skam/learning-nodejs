import { createReadStream } from 'fs';

const options = {
  encoding: 'utf8',
};

const readStream = createReadStream('gibt-es-nicht.txt', options);

readStream.on('readable', () => {
  const data = readStream.read();
  if (data) {
    console.log(data);
  }
});

readStream.on('close', () => {
  console.log('Der Stream wurde geschlossen');
});

readStream.on('error', (e) => {
  console.error('Es ist ein Fehler aufgetreten: ', e);
});
