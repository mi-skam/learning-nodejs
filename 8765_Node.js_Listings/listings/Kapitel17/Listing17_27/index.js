import { Observable, lastValueFrom } from 'rxjs';

const observable = Observable.create((observer) => {
  observer.next(Math.random());
  observer.next(Math.random());
  observer.next(Math.random());
  observer.complete();
});

lastValueFrom(observable).then((data) => console.log(data));
