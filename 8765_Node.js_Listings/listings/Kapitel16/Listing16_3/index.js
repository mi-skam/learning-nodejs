import { readFile } from 'fs';

console.log('Operation 1');
readFile('input.txt', 'utf-8', (err, content) => {
  console.log('Content: ', content);
});
console.log('Operation 2');
console.log('Operation 3');
