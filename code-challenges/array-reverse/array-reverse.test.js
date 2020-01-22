'use strict';

const reverseArray = require('./array-reverse');

describe('Testing Challenge', () => {
  it('should reverse the order of elements in an array', () => {
    // Arrange
    let array = [1,2,3,4,5,6,7,8,9,10];
    let array2 = ['one','two','three','four'];
    
    // Act
    let result1 = reverseArray(array);
    let result2 = reverseArray(array2);

    // Assert
    expect(result1).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
    expect(result2).toStrictEqual(['four','three','two','one']);
  })
})