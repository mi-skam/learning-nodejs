import { createServer } from 'http';
import pug from 'pug';

const fn = pug.compileFile('templates/compile.pug');
createServer((req, res) => {
  let output = fn({ name: 'World' });
  output += fn({ name: 'Node.js' });

  res.end(output);
}).listen(8080);
