const http = require("http");

const httpServer = http.createServer((req, res) => {
  // LEGACY
  // const parsedUrl = url.parse(req.url, true)
  // Wir nutzen die URL Api um die Url, die in den Browser eingeben wurde (im req Objekt) zu parsen
  const parsedUrl = new URL(req.url, `http://${req.headers.host}/`);

  /* Jetzt senden wir HTML, nicht nur Text ➡️ text/html */
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  const body = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Node.js Demo</title>
      </head>
      <body>
        <h1>Hello ${parsedUrl.searchParams.get("name") ?? "world"}</h1>
      </body>
    </html>`;
  res.end(body);
});

httpServer.listen(8080);