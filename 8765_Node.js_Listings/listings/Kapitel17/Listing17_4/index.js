import { Observable } from 'rxjs';

const observable = Observable.create((observer) => {
  observer.next('Hello');
  observer.next('World');
  observer.error('An Error occurred');
  observer.complete();
});

observable.subscribe(
  (data) => console.log('Data: ', data),
  (error) => console.error('Error: ', error),
  (finished) => console.log('Finished!'),
);
