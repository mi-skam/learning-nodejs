import { createServer } from 'http';
import { parse } from 'url';

function cleanupName(name) {
  return name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

createServer((req, res) => {
  const parts = parse(req.url, true);
  let name = '';

  if (parts.query.name) {
    name = cleanName(parts.query.name);
  }

  res.end(`<div>Hello ${name}</div>`);
}).listen(8080);
