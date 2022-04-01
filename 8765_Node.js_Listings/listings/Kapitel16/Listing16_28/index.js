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

const hello = await asyncOperation(true, 'Hello', 100);
const world = await asyncOperation(true, 'World', 100);
console.log(hello + ' ' + world);
