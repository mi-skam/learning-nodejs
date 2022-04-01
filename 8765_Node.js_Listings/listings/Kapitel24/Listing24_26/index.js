import { createServer } from 'http';
import { parse } from 'url';

createServer((req, res) => {
  const input = parse(req.url, true).query.input;
  res.end(`<html><body>${input}</body></html>`);
}).listen(8080);
