import express from 'express';
import { movieRouter } from './movie/index.js';

const app = express();

app.get('/', (req, res) => {
  res.redirect('/movie');
});

app.use('/movie', movieRouter);

app.listen(8080, () => {
  console.log('Server is listening on port 8080.');
});
