jest.mock('fs', () => {
  return {
    readFile(name, encoding, cb) {
      cb(null, 'a\nb\nc');
    },
  };
});

const countLines = require('./countLines');

describe('countLines', () => {
  it('should count the lines of a 3-lined file correctly', async () => {
    const lines = await countLines('input.txt');
    expect(lines).toBe(3);
  });
});
