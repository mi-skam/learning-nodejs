import request from 'request';

request('http://localhost:8080/', (err, response, body) => {
  console.log(body);
});
