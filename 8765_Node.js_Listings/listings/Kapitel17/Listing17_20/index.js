import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

Observable.create((observer) => {
  observer.next('test 1');
  observer.next('test 2');
  observer.error('something went wrong');
  observer.next('test 3');
  observer.complete();
})
  .pipe(
    map((data) => {
      const mappedData = data.toUpperCase();
      // throw new Error('Mapping failed');
      return mappedData;
    }),
    catchError((e, caught) => {
      console.log('the error was: ', e);
      return of('test 3', 'test 4');
    }),
  )
  .subscribe((data) => console.log(data));
