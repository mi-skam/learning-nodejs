import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

Observable.create((observer) => {
  setTimeout(() => {
    observer.next('first package');
  }, 500);
  setTimeout(() => {
    observer.next('second package');
  }, 2000);
})
  .pipe(timeout(1000))
  .subscribe(
    (data) => console.log(data),
    (error) => console.error('error', error),
  );
