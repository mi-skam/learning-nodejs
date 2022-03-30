const http = require('http');
const addresses = require('./data');
const getList = require('./list');

const httpServer = new http.Server();

httpServer.on('request', (req, res) => {
//   const resBody = getList(addresses);
  let resBody;
  const parts = req.urlj
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(resBody);
});

httpServer.listen(8080);
