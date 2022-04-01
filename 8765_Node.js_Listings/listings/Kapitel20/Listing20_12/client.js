import { connect } from 'net';
import { readFile } from 'fs/promises';

const data = await readFile('logo.png');

const client = connect({ port: 8080, host: '127.0.0.1' }, () => {
  client.end(data.toString('base64'));
});
