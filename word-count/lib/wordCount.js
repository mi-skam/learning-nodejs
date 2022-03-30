const ignore = /[\.,]/g;
const separator = ' ';

module.exports = function wordCount(sentence) {
  return sentence
    .replace(ignore, '')
    .toLowerCase()
    .split(separator)
    .reduce((acc, current) => {
      acc[current] = acc[current] + 1 || 1;
      return acc;
    },{});
};
