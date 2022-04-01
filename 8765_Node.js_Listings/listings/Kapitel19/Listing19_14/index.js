import { stat } from 'fs/promises';

const statistic = await stat('/usr/local/bin/node');

console.log(
  `Size of the file "/usr/local/bin/node" is ${statistic.size} Bytes`,
);
