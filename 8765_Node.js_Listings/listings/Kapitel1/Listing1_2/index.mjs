import EventEmitter from 'events';

const myObj = new EventEmitter();

myObj.on('myEvent', (data) => {
  console.log(data);
});
myObj.emit('myEvent', 'Hello World');
