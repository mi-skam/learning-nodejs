import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.set('views', `${dirname(fileURLToPath(import.meta.url))}/app/views`);
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('login');
});

app.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080'),
);
