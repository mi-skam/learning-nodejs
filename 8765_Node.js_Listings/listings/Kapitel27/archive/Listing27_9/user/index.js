import seneca from 'seneca';
import userPlugin from './user.plugin.js';

seneca().use(userPlugin).listen({ type: 'tcp' });
