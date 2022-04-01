import { connect } from 'net';

const host = '127.0.0.1';

const writable = connect({ host, port: 8181 }, () => {
  const readable = connect({ host, port: 8080 }, () => {
    readable.pipe(writable);
  });
});
