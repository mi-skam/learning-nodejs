import seneca from 'seneca';

seneca()
  .add({ role: 'user', cmd: 'getAll' }, (msg, respond) => {
    respond(null, { msg: 'All users' });
  })
  .listen();
