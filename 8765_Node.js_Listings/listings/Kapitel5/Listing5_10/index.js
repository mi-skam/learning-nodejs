import { createServer } from 'http';
import data from './data.js';
import { getList } from './list.js';

createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  const responseBody = getList(data.addresses);
  response.end(responseBody);
}).listen(8080, () =>
  console.log('Adressbuch erreichbar unter http://localhost:8080'),
);
