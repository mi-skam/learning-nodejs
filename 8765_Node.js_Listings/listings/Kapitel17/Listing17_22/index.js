import { range } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';

range(1, 10)
  .pipe(
    filter((data) => data % 2 === 0),
    tap((data) => console.log('value after filter: ', data)),
    map((data) => data * data),
  )
  .subscribe((data) => console.log(data));
