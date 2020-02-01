'use strict';

const { arrays, arrayDuplicates } = require('../../test-values');
const duplicates = require('./duplicates');

describe('Duplicate values tests', () => {
  xit('should return with text if all values are unique', () => {
    // Arrange
    let array1 = arrays[0];
    let array2 = arrays[1];
    let array3 = arrays[2];
    let array4 = arrays[3];
    let array5 = arrays[4];
    let array6 = arrays[5];

    // Act
    let result1 = duplicates(array1);
    let result2 = duplicates(array2);
    let result3 = duplicates(array3);
    let result4 = duplicates(array4);
    let result5 = duplicates(array5);
    let result6 = duplicates(array6);

    // Assert
    expect(result1).toBe('No duplicates found.');
    expect(result2).toBe('No duplicates found.');
    expect(result3).toBe('No duplicates found.');
    expect(result4).toBe('No duplicates found.');
    expect(result5).toBe('No duplicates found.');
    expect(result6).toBe('No duplicates found.');
  });

  it('should return an array with arrays that have the duplicated value first, and the amount of times they occur second', () => {
    // Arrange
    let array1 = [1,2,3,4,4,4,5,6,7];
    let array2 = [1,1,1,1,1,1,1,1,2,3,4,5,6];

    // Act
    let result1 = duplicates(array1);
    let result2 = duplicates(array2);
    let result3 = duplicates(arrayDuplicates);

    // Assert
    expect(result1).toEqual(['4 occurs 3 times.']);
    expect(result2).toEqual(['1 occurs 8 times.']);
    expect(result3).toEqual(['1 occurs 8 times.', '2 occurs 8 times.', '3 occurs 8 times.', '4 occurs 8 times.', '5 occurs 8 times.', '6 occurs 8 times.', '7 occurs 8 times.', '8 occurs 8 times.']);
  });
});
