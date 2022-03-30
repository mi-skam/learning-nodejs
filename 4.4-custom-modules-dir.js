const wc = require('./word-count');

const sentence = 'Wo viel Licht ist, ist auch Schatten.';
const countedWords = wc(sentence);
/* output */
console.log(sentence);
for (let i in countedWords) {
  console.log(countedWords[i] + 'x ' + i);
}
