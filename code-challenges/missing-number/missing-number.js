'use strict';

const missingNumber = (array) => {
  if(!Array.isArray(array)) {
    return 'I need an array and did not receive one, or received an invalid array.';
  }
  for(let i = 1; i < array.length - 1; i++) {
    if(array.includes(i) === false) {
      return i;
    }
  }
  return 'All values present';
}

module.exports = missingNumber;
