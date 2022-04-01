import { Observable, Subject } from 'rxjs';

const observable = Observable.create((observer) => {
  setTimeout(() => {
    observer.next(Math.random());
  }, 1000);
});

observable.subscribe((data) => console.log('Observer 1: ', data));
observable.subscribe((data) => console.log('Observer 2: ', data));

const subject = new Subject();

subject.subscribe((data) => console.log('Subject observer 1:', data));
subject.subscribe((data) => console.log('Subject observer 2:', data));

subject.next(Math.random());

/* Ausgabe:
Subject observer 1: 0.17259172861374394
Subject observer 2: 0.17259172861374394
Observer 1:  0.12258583815002866
Observer 2:  0.08073784778403792
*/
