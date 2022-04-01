import Calc from './calc.js';

describe('Calc', () => {
  let calc;
  beforeEach(() => {
    calc = new Calc();
  });

  describe('add', () => {
    it('should add 1 and 1 and return 2', () => {
      const result = calc.add(1, 1);
      expect(result).toBe(2);
    });
  });
});
