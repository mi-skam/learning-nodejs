process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection'); // Ausgabe: unhandledRejection
  console.error(error); // Ausgabe: Whoops, an Error occured
});

function withPromise() {
  return Promise.reject('Whoops, an Error occured');
}

withPromise().then(() => {
  console.log('Promise resolved');
});
