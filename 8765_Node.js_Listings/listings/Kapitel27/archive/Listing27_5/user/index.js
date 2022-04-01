import seneca from 'seneca';
import { getAllAction, createAction } from './controller.js';

seneca()
  .add({ role: 'user', cmd: 'getAll' }, getAllAction)
  .add({ role: 'user', cmd: 'create' }, createAction)
  .listen();
