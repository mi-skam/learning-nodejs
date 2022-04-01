import { constants } from 'fs';
import { stat, access } from 'fs/promises';

try {
  const fileStat = await stat('./input.txt');
  console.log(fileStat); // Ausgabe: Stats { dev:...
} catch (err) {
  console.error(err);
}

try {
  await access('./input.txt', constants.R_OK);
  console.log('File is readable');
} catch (e) {
  console.error('File not readable');
}
