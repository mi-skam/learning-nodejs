import express from 'express';

const app = express();
const movieRouter = express.Router();

app.get('/', (req, res) => {
  res.redirect('/movie');
});

movieRouter.get('/', (req, res) => {
  res.send(['movie1', 'movie2']);
});

app.use('/movie', movieRouter);

app.listen(8080, () => {
  console.log('Listens on 8080.');
});
