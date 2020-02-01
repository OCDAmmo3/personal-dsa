'use strict';

const binarySearch = (array, value) => {
  let mid = Math.floor(array.length/2);
  let left = 0;
  let right = array.length - 1;

  while(value !== array[mid]) {
    if(left === mid) {
      return -1;
    } else if(value < array[mid]) {
      right = mid;
      mid = Math.floor((right-left)/2 + left); // 
    } else if(value > array[mid]) {
      left = mid;
      mid = Math.ceil((right-left)/2 + left);
    }
  }
  return mid;
}

module.exports = binarySearch;
