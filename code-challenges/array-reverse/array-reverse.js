'use strict';

const reverseArray = (array) => {
  let value = array.length;
  let result = [];
  for(let i = 1; i < value + 1; i++) {
    result.push(array[array.length - i]);
  };
  return result;
};

module.exports = reverseArray;
