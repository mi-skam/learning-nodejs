const myLog = console.log;

console.log = function () {
  myLog('Another Implementation');
};

String.prototype.toLowerCase = function () {
  myLog('This is String.toLowerCase');
};

export default {
  name: 'MyModule',
};
