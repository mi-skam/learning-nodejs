import { Duplex } from 'stream';

const duplex = new Duplex({
  read() {
    this.push(chunk);
  },
  write(chunk, encoding, next) {
    next();
  },
});
