const pattern = /([a-z]+)+$/;

console.time('ReDoS');
const attack = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa!';
pattern.test(attack);
console.timeEnd('ReDoS');

console.time('NoReDoS');
const normalValue = 'asdf';
pattern.test(normalValue);
console.timeEnd('NoReDoS');
