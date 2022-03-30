import { wordCount } from "./wordCount-ecma.mjs";

const sentence = 'Wo viel Licht ist, ist auch Schatten.';
const countedWords = wordCount(sentence);
/* output */
console.log(sentence);
for (let i in countedWords) {
  console.log(countedWords[i] + 'x ' + i);
}
