'use strict';

const duplicates = (array) => {
  if(!Array.isArray(array)) {
    return 'Invalid array.';
  }
  let result = [];
  array.forEach(value => {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
      if(value === array[i]) {
        count++;
      }
    }
    if(count > 1 && result.indexOf(`${value} occurs ${count} times.`) === -1) {
      result.push(`${value} occurs ${count} times.`);
    }
  })
  return result;
}

module.exports = duplicates;
