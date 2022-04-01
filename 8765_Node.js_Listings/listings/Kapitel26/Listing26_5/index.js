import { PerformanceObserver, performance } from 'perf_hooks';
import { appendFile } from 'fs/promises';

if (process.env.MEASURE) {
  const obs = new PerformanceObserver((items) => {
    const entries = items.getEntries();
    entries.forEach(({ name, duration }) => {
      appendFile('time.log', `${name}: ${duration}\n`);
    });
  });
  obs.observe({ entryTypes: ['measure'] });
}

function sleep(delayInSec) {
  const start = Date.now();

  while (true) {
    if (Date.now() - start >= delayInSec * 1000) {
      break;
    }
  }
}

performance.mark('sleep start');
sleep(10);
performance.mark('sleep end');
performance.measure('sleep: ', 'sleep start', 'sleep end');
