const HttpServer = require('http').Server;

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
      </body>
    </html>`
    res.write(resBody);
    res.end();
})

httpServer.on('listening', () => {
    console.log('Addressbuch erreichbar unter http://0.0.0.0:8080.');
})

httpServer.listen(8080);