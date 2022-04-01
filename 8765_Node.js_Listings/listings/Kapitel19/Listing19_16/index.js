import { stat } from 'fs';

stat('input.txt', (err, stat) => {
  console.log(`User: ${stat.uid}`);
  console.log(`Gruppe: ${stat.gid}`);
  console.log(`Berechtigungen: ${stat.mode.toString(8)}`);
});
