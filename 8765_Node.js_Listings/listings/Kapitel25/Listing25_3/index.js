import express from 'express';

const app = express();

app.get('/', (request, response) => response.send('Hallo Welt'));

app.listen(8080);
