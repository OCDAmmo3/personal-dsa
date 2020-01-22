'use strict';

const arrayShift = (array, value) => {
  if(!value) {
    return 'I need a value to insert.';
  }
  if(!array) {
    return 'I need an array to insert into.';
  }
  if(!Array.isArray(array)) {
    return 'Invalid array.'
  }  
  let result = [];
  for(let i = 0; i < Math.ceil(array.length * .5); i++) {
    result.push(array[i]);
  }
  result.push(value);
  for(let i = result.length - 1; i < array.length; i++) {
    result.push(array[i]);
  };
  return result;
};

module.exports = arrayShift;
