import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('My first express app.');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080.');
});
