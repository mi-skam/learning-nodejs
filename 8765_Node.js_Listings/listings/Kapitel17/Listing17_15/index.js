import { range } from 'rxjs';
import { take, first, last } from 'rxjs/operators';

range(1, 10)
  .pipe(first())
  .subscribe((data) => console.log('first: ', data));
range(1, 10)
  .pipe(take(2))
  .subscribe((data) => console.log('take 2: ', data));
range(1, 10)
  .pipe(last())
  .subscribe((data) => console.log('last: ', data));
