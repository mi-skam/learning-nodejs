import seneca from 'seneca';
import userPlugin from './user.plugin.js';

// seneca().use('seneca-amqp-transport').use(userPlugin).listen({
//   type: 'amqp',
//   pin: 'role:user',
//   url: 'amqp://rabbitmq',
//   port: 5672,
// });

console.log('XXXXXXX');

seneca({legacy: {meta: true‚}})
  .use('seneca-amqp-transport')
  .add({ 'role:user,cmd:getAll'}, getAllAction)
  .add({ 'role:user,cmd:create' }, createAction)
  .listen({
    type: 'amqp',
    // pin: 'role:user',
    url: 'amqp://rabbitmq',
    port: 5672,
  });
