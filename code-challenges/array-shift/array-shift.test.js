'use strict';

const shiftArray = require('./array-shift');

const value = 10;

describe('Array shift testing', () => {
  it('can add a value to the center of an even itemed array', () => {
    // Arrange
    let arrEven = [1,2,3,4];
    let arrEmpty = [];
    let arrStrings = ['this','that','those','them'];
    
    // Act + Assert
    expect(shiftArray(arrEven, value)).toEqual([1,2,10,3,4]);
    expect(shiftArray(arrEmpty, value)).toEqual([10]);
    expect(shiftArray(arrStrings, value)).toEqual(['this','that',10,'those','them']);
  });

  it('can add a value to the center of an odd iteed array', () => {
    // Arrange
    let arrOdd = [1,2,3,4,5];
    let arrSingle = [1];

    // Act + Assert
    expect(shiftArray(arrOdd, value)).toEqual([1,2,3,10,4,5]);
    expect(shiftArray(arrSingle, value)).toEqual([1,10]);
  });

  it('can detect and deny invalid arrays/inputs that are not arrays', () => {
    // Arrange
    let arrInvString = 'string';
    let arrInvNum = 24;
    let arrInvObj = {name: 'charlie'};

    // Act + Assert
    expect(shiftArray(arrInvString, value)).toBe('Invalid array.');
    expect(shiftArray(arrInvNum, value)).toBe('Invalid array.');
    expect(shiftArray(arrInvObj, value)).toBe('Invalid array.');
  });
});
