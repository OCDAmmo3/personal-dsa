'use strict';

const removeNode = (list) => {
  let hashSet = new Set();
  let curr = list.head;
  let prev;
  while(curr) {
    if(!hashSet.has(curr.value)) {
      if(curr) {console.log(`Current node is ${curr.value}`)};
      prev = curr;
      hashSet.add(curr.value);
    } else {
      if(curr) {console.log(`Current node is already in hash set as ${curr.value}`)};
      prev.next = curr.next;
      curr = curr.next;
    }
  }
  return list;
}

module.exports = removeNode;
