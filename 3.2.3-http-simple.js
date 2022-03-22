const http = require('http');
const httpServer = http.createServer((req, res) => {
  /* Jetzt senden wir HTML, nicht nur Text ➡️ text/html */
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  const body = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Node.js Demo</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>`
  res.end(body);
});

httpServer.listen(8080);
