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

async function handleAsyncOperations() {
  const hello = await asyncOperation(true, 'Hello', 100);
  const world = await asyncOperation(true, 'World', 100);
  try {
    await asyncOperation(false, '!', 100);
  } catch (err) {
    console.error(`Caught Error: ${err}`);
  }
  console.log(`${hello} ${world}`);
}

handleAsyncOperations();
