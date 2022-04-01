import { spawn } from 'child_process';
const find = spawn('find', ['.', '-iname', 'node'], { cwd: '/usr/local' });
const grep = spawn('grep', ['bin']);

find.stdout.pipe(grep.stdin);

find.on('exit', (code) => {
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log('' + data);
});
