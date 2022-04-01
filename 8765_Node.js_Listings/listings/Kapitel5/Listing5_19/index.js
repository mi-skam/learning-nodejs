import { createServer } from 'http';
import data from './data.js';
import { getList } from './list.js';
import { deleteAddress } from './delete.js';
import { getForm } from './form.js';
import { parse } from 'querystring';
import { saveAddress } from './save.js';
import { readFile } from 'fs';

createServer((request, response) => {
  const parts = request.url.split('/');
  if (parts.includes('delete')) {
    data.addresses = deleteAddress(data.addresses, parts[2]);
    redirect(response, '/');
  } else if (parts.includes('new')) {
    send(response, getForm());
  } else if (parts.includes('edit')) {
    send(response, getForm(data.addresses, parts[2]));
  } else if (parts.includes('save') && request.method === 'POST') {
    let body = '';
    request.on('readable', () => {
      const data = request.read();
      body += data !== null ? data : '';
    });
    request.on('end', () => {
      const address = parse(body);
      data.addresses = saveAddress(data.addresses, address);
      redirect(response, '/');
    });
  } else if (request.url === '/style.css') {
    readFile('public/style.css', 'utf8', (err, data) => {
      if (err) {
        response.statusCode = 404;
        response.end();
      } else {
        response.end(data);
      }
    });
  } else {
    send(response, getList(data.addresses));
  }
}).listen(8080, () =>
  console.log('Adressbuch erreichbar unter http://localhost:8080'),
);

function send(response, responseBody) {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(responseBody);
}

function redirect(response, to) {
  response.writeHead(302, { location: '/', 'content-type': 'text/plain' });
  response.end('302 Redirecting to /');
}
