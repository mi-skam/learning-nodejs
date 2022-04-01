import request from 'request';

import { createReadStream } from 'fs';

const formData = {
  firstname: 'Jason',
  lastname: 'Bourne',
  street: '1000 Colonial Farm Rd',
  city: 'Langley',
  country: 'USA',
  upload: createReadStream('./bild.png'),
};

request.post(
  { url: 'http://localhost:8080/save', formData },
  (err, response, body) => {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  },
);
