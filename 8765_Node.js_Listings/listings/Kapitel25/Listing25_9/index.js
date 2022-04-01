import { open } from 'fs';

open('lock', 'wx+', (error, fd) => {
  if (error) {
    throw error;
  }
  console.log(fd);
});
