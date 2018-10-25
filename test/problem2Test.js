let isAnagram = require('../lib/problem2.js');
let expect = require('expect');

describe('isAnagram', () => {
  describe('when word is schoolmaster and theclassroom', () => {
    it('should return true', () => {
      const result = isAnagram.isAnagram('schoolmaster', 'theclassroom');
      expect(result).toEqual(true);
    });
  });
});

describe('isAnagram', () => {
  describe('when word is abcd and abeeseedee', () => {
    it('should return false', () => {
      const result = isAnagram.isAnagram('abcd', 'abeeseedee');
      expect(result).toEqual(false);
    });
  });
});

describe('isAnagram', () => {
  describe('when word is Flindel and Spindel', () => {
    it('should return false', () => {
      const result = isAnagram.isAnagram('Flindel', 'Splindel');
      expect(result).toEqual(false);
    });
  });
});

describe('isAnagram', () => {
  describe('when word is apple and Paple', () => {
    it('should return true', () => {
      const result = isAnagram.isAnagram('apple', 'Paple');
      expect(result).toEqual(true);
    });
  });
});

describe('isAnagram', () => {
  describe('when word is apple Pie and Pineapple', () => {
    it('should return false', () => {
      const result = isAnagram.isAnagram('apple Pie', 'Pineapple');
      expect(result).toEqual(false);
    });
  });
});
