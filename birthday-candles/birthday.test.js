'use strict';

const birthdayCandles = require('./birthday');
const { arrays, arrayDuplicates } = require('../test-values');

describe('Amount of highest number in an array', () => {
  it('can return a number based on the amount of integers in an array that are the highest value', () => {
    // Arrange + Act + Assert
    arrays.forEach(array => {
      expect(birthdayCandles(array)).toEqual(1);
    });
    expect(birthdayCandles(arrayDuplicates)).toEqual(8);
  });
});
