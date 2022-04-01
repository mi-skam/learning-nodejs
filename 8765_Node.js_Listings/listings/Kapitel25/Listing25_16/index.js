import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hallo Express!');
});

app.listen(8080);
