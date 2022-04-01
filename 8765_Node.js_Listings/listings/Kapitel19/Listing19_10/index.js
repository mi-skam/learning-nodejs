import { open } from 'fs';
open('/gibt-es-nicht.txt', 'r', (err, handle) => {
  if (err) throw err;
});
