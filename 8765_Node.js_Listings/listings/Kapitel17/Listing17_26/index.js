import { Observable } from 'rxjs';
import { publish } from 'rxjs/operators';

const observable = Observable.create((observer) => {
  observer.next(Math.random());
  observer.next(Math.random());
}).pipe(publish());

observable.subscribe((data) => console.log('Observer 1: ', data));
observable.subscribe((data) => console.log('Observer 2: ', data));

observable.connect();
