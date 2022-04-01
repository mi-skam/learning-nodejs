function sleep(delayInSec) {
  const start = Date.now();

  while (true) {
    if (Date.now() - start >= delayInSec * 1000) {
      break;
    }
  }
}

console.time('sleep');
sleep(10);
console.timeEnd('sleep'); // Ausgabe: sleep: 10.000s
