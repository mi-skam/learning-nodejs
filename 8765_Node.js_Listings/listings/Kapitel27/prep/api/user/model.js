import { connect } from 'amqplib';
import { v4 as uuidv4 } from 'uuid';
import { queue, register } from '../connect.js';

export function getAll(channel) {
  const message = {
    id: uuidv4(),
    role: 'user',
    cmd: 'getAll',
  };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

  return message;
}
