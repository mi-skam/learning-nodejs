import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('My first express application');
});

app.listen(8080, () => {
  console.log('Filmdatenbank erreichbar unter http://localhost:8080');
});
