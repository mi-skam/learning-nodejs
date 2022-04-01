import { range } from 'rxjs';
import { every } from 'rxjs/operators';

range(1, 9)
  .pipe(every((data) => data < 10))
  .subscribe((result) =>
    result
      ? console.log('all values are smaller than 10')
      : console.log('thereꞌs at least one value greater than 10'),
  );
