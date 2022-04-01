function sleep(delayInSec) {
  const start = Date.now();

  while (true) {
    if (Date.now() - start >= delayInSec * 1000) {
      break;
    }
  }
}

console.log('Before Sleep');
sleep(10);
console.log('After Sleep');
