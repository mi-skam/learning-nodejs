const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("Hi!");
});

server.listen(8080, () => {
  console.log("Server is listening on http://0.0.0.0:8080");
});
