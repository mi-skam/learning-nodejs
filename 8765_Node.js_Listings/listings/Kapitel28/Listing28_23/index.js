import intersection from 'https://raw.githubusercontent.com/lodash/lodash/master/intersection.js';

const numbers1 = [1, 2, 3, 4];
const numbers2 = [6, 5, 4, 3];

const numbersIntersection = intersection(numbers1, numbers2);

console.log(numbersIntersection);
