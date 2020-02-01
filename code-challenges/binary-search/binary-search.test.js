'use strict';

let binarySearch = require('./binary-search');
let { arrays } = require('../../test-values');

describe('Binary Search Tests', () => {
  it('can find the index at which the given value is at inside an array', () => {
    // Arrange
    let value1 = 7;
    let value2 = 40;
    let value3 = 834;
    let value4 = 4928;
    let value5 = 54313;
    let value6 = 295837;

    // Act
    let result1 = binarySearch(arrays[0],value1);
    let result2 = binarySearch(arrays[1],value2);
    let result3 = binarySearch(arrays[2],value3);
    let result4 = binarySearch(arrays[3],value4);
    let result5 = binarySearch(arrays[4],value5);
    let result6 = binarySearch(arrays[5],value6);

    // Assert
    expect(result1).toBe(6);
    expect(result2).toBe(39);
    expect(result3).toBe(833);
    expect(result4).toBe(4927);
    expect(result5).toBe(54312);
    expect(result6).toBe(295836);
  });
  it('can find a value in a binary search that doesn\'t have every single value', () => {
    // Arrange
    let value = 24;
    let array = [1,4,5,12,18,24,27,45,123,256,900,999,1010];

    // Act
    let result = binarySearch(array, value);

    // Assert
    expect(result).toBe(5);
  });
});
