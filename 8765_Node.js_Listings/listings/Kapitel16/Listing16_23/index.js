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

asyncOperation(true, 'Hello', 100)
  .then((data) => {
    console.log(data + ' ');
    return asyncOperation(true, 'World', 200);
  })
  .then((data) => {
    console.log(data);
    return '!';
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('Error: ', err);
  });
