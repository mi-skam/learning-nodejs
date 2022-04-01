import express from 'express';
import getChannel, { registerHandler } from './connect.js';
import initRouter from './user/index.js';

const channel = await getChannel();
registerHandler(channel);

const app = express();

app.use(express.json());
app.use('/user', await initRouter(channel));

app.listen(8080, () => console.log('API Gateway is listening'));
