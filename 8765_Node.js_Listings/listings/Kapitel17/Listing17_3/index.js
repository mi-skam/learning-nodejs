import { Observable } from 'rxjs';

const observable = Observable.create((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count++ < 10) {
      observer.next('Data package ' + count);
    } else {
      observer.complete();
      clearInterval(interval);
    }
  }, 500);
});

observable.subscribe((data) => console.log(data));
