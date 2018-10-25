let maxProduct = require('../lib/problem1.js');
let expect = require('expect');

describe('maxProduct', () => {
  describe('when checking for maximum product of array', () => {
    it('should return maximum product of array', () => {
      const result = maxProduct.maxProduct([3, 6, -2, -5, 7, 3]);
      expect(result).toEqual(42);
    });
  });
});

describe('maxProduct', () => {
  describe('when checking for maximum product of array', () => {
    it('should return maximum product of array', () => {
      const result = maxProduct.maxProduct([7, 8, -10, -6, 2, 3]);
      expect(result).toEqual(60);
    });
  });
});

describe('maxProduct', () => {
  describe('when checking for maximum product of array', () => {
    it('should return maximum product of array', () => {
      const result = maxProduct.maxProduct([1, 4, -9, 0, -2, 3]);
      expect(result).toEqual(18);
    });
  });
});
