import { Readable } from 'stream';

class ReadStream extends Readable {
  _read() {
    this.push('Hello World');
  }
}
