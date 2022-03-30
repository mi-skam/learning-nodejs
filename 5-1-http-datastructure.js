const HttpServer = require('http').Server;

const addresses = [
  {
    id: 1,
    firstname: 'James',
    lastname: 'Bond',
    street: '12 Millbank',
    city: 'London',
    country: 'Great Britain',
  },
  {
    id: 2,
    firstname: 'Sherlock',
    lastname: 'Holmes',
    street: '221b Baker St',
    city: 'London',
    country: 'Great Britain',
  },
];

const httpServer = new HttpServer();

httpServer.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html');

  const resBody = `<!DOCTYPE html>
    <html>
      <head>
        <title>Addressbuch</title>
      </head>
      <body>
        <h1>Addressbuch</h1>
        <table>
          <tr>
            <td>Id</td><td>Vorname</td><td>Nachname</td>
          </tr>
          ${addresses.map(createRow).join('')}
        </table>
      </body>
    </html>`;
  res.write(resBody);
  res.end();
});

httpServer.on('listening', () => {
  console.log('Addressbuch erreichbar unter http://0.0.0.0:8080.');
});

httpServer.listen(8080);

function createRow(address) {
  return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
  </tr>`
}