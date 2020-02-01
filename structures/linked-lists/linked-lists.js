'use strict';

class LinkedList {
  constructor(input) {
    if(input) {
      this.head = new Node(input);
    } else {
      this.head = null;
    }
    this.length = 0;
  }

  insert(input) {
    let newNode = new Node(input);
    if(this.head) newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  toString() {
    let curr = this.head;
    let array = [];
    while(curr) {
      array.push(curr.value);
      curr = curr.next;
    }
    return array.join(',');
  }

  toArray() {
    let curr = this.head;
    let array = [];
    while(curr) {
      array.push(curr.value);
      curr = curr.next;
    }
    return array;
  }

  append(input) {
    let curr = this.head;
    let newNode = new Node(input);
    while(curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;
  }
}

class Node {
  constructor(input) {
    this.value = input;
    this.next = null;
  }
}

module.exports = LinkedList;
