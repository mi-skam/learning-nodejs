const code = 'console.log(process.pid)';

const func = new Function(code);

func();
