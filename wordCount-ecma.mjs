const ignore = /[\.,]/g;
const separator = ' ';

export function wordCount(sentence) {
  return sentence
    .replace(ignore, '')
    .toLowerCase()
    .split(separator)
    .reduce((acc, current) => {
      acc[current] = (acc[current] ?? 0) + 1;
      return acc;
    },{});
};
