import { Observable } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

Observable.create((observer) => {
  observer.complete();
})
  .pipe(defaultIfEmpty('Observable did not emit a value'))
  .subscribe((data) => console.log(data));
