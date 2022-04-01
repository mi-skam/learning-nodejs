function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hallo Welt!');
    }, 1000);
  });
}

const promise = asyncFunction();
promise.then((value) => {
  console.log(value);
});
