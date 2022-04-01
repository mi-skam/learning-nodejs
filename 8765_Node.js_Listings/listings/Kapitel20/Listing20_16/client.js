import { createSocket } from 'dgram';

const message = Buffer.from('Hello Server');

const client = createSocket('udp6');

client.send(message, 0, message.length, 8080, (err, bytes) => {
  client.close();
});
