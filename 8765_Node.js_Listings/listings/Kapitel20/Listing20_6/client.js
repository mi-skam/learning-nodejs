import { connect } from 'net';

const client = connect('/tmp/nodejs.sock', () => {
  console.log('connected to the server');
  client.write('Hello Server');
});
