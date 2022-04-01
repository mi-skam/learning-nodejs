function asyncOperation(resolve, value, time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (resolve) {
        res(value);
      } else {
        rej(value);
      }
    }, time);
  });
}

async function greet() {
  const hello = await asyncOperation(true, 'Hello', 100);
  const world = await asyncOperation(true, 'World', 100);
  return hello + ' ' + world;
}

const greetResult = greet();

console.log(greetResult); // Ausgabe: Promise { <pending> }
greetResult.then((data) => console.log(data)); // Ausgabe: Hello World
