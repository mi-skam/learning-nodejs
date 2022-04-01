const person = {
  name: 'Lisa',
  age: 32,
};

const { name, age } = person;

console.log('Name: ', name); // Ausgabe: Name: Lisa
console.log('Age: ', age); // Ausgabe: Age: 32

const person2 = ['Klaus', 17];
const [name2, age2] = person2;

console.log('Name: ', name2); // Ausgabe: Name: Klaus
console.log('Age: ', age2); // Ausgabe: Age: 17
