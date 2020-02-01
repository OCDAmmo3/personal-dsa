'use strict';

const { arrays } = require('../../test-values');
const missingNumber = require('./missing-number');

describe('Find the missing number in an array from 1-100', () => {
  it('can find what number is missing from the array', () => {
    // Arrange
    let array1 = arrays[0];
    let array2 = arrays[1];
    let array3 = arrays[2];
    let index1 = array1.indexOf(7);
    let index2 = array2.indexOf(74);
    let index3 = array3.indexOf(921);
    array1.splice(index1, 1);
    array2.splice(index2, 1);
    array3.splice(index3, 1);

    // Act
    let result1 = missingNumber(array1);
    let result2 = missingNumber(array2);
    let result3 = missingNumber(array3);

    // Assert
    expect(result1).toBe(7);
    expect(result2).toBe(74);
    expect(result3).toBe(921);
  });
});
