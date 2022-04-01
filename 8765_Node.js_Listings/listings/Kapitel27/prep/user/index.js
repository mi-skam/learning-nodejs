import { connect } from 'amqplib';
import { getChannel, queue } from './connect.js';
import { getAll } from './model.js';

const channel = await getChannel();

channel.consume(queue, async (message) => {
  const messageData = JSON.parse(message.content.toString());
  console.log(messageData);
  if (messageData.role === 'user') {
    switch (messageData.cmd) {
      case 'getAll':
        const data = await getAll();
        channel.sendToQueue(
          queue,
          Buffer.from(
            JSON.stringify({
              role: 'user',
              cmd: 'answer',
              id: messageData.id,
              data,
            }),
          ),
        );
        channel.ack(message);
        break;
      default:
        console.error('Unknown command');
        channel.nack(message);
        break;
    }
  }
});
