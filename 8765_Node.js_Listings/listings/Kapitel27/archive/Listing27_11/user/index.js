import seneca from 'seneca';
import userPlugin from './user.plugin.js';

seneca().use('seneca-amqp-transport').use(userPlugin).listen({
  type: 'amqp',
  pin: 'role:user',
  url: 'amqp://rabbitmq',
  port: 5672,
});
