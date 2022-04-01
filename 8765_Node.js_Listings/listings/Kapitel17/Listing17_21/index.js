import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

Observable.create((observer) => {
  console.log('starting');
  observer.next(Math.random());
  observer.next(Math.random());
  observer.error('something went wrong');
  observer.next(Math.random());
})
  .pipe(retry(2))
  .subscribe((data) => console.log(data));
