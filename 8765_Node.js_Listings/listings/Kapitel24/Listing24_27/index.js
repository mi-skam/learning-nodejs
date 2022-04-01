import { createServer } from 'http';
import { parse } from 'url';
import entities from 'entities';

createServer((req, res) => {
  const input = parse(req.url, true).query.input;
  res.end(`<html><body>${entities.encode(input)}</body></html>`);
}).listen(8080);
