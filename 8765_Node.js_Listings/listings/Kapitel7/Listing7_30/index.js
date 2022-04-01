import { createServer } from 'http';
import { readFile } from 'fs';
import hbs from 'handlebars';

createServer((req, res) => {
  readFile('templates/index.hbs', 'utf-8', (err, data) => {
    const template = hbs.compile(data);
    const result = template({ name: 'Handlebars' });
    res.end(result);
  });
}).listen(8080);
