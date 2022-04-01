import { createServer } from 'http';
import { parse } from 'url';

class User {
  create() {
    console.log('create');
  }
  read() {
    console.log('read');
  }
  update() {
    console.log('update');
  }
  delete() {
    console.log('delete');
  }
}

createServer((req, res) => {
  const reqData = parse(req.url, true).query;
  const user = new User(reqData.id);
  const whitelist = ['create', 'read'];

  if (reqData.method && whitelist.indexOf(reqData.method) != -1) {
    res.end(user[reqData.method]());
  } else {
    req.statusCode = 403;
    res.end();
  }
}).listen(8080);
