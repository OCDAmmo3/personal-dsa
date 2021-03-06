'use strict';

const removeNode = (list) => {
  let hashSet = new Set();
  let curr = list.head;
  let prev;
  while(curr) {
    if(!hashSet.has(curr.value)) {
      prev = curr;
      hashSet.add(curr.value);
    } else {
      prev.next = curr.next;
      curr = curr.next;
    }
  }
  return list;
}

module.exports = removeNode;
