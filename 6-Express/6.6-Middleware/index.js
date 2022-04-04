import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { movieRouter } from './movie/index.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect('/movie');
});

app.use(morgan('common', { immediate: true }));

app.use('/movie', movieRouter);

app.listen(8080, () => {
  console.log('Server is listening on port 8080.');
});
