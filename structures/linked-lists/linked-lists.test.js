'use strict';

let LinkedList = require('./linked-lists');

describe('Linked List tests', () => {
  it('can create a valid linked list with a head node that contains a value and a next that is null', () => {
    // Arrange
    let list1 = new LinkedList(1);

    // Assert
    expect(list1.head).toEqual({value:1, next:null});
    expect(list1.head.value).toEqual(1);
  });

  it('can insert a new value into a linked list, in front of the original value as the new head', () => {
    // Arrange
    let list1 = new LinkedList(1);

    // Act
    list1.insert(2);
    list1.insert(3);
    list1.insert(4);

    // Assert
    expect(list1.head.value).toBe(4);
    expect(list1.head).toEqual({value:4, next:{value:3, next:{value:2, next:{value:1, next:null}}}})
  });

  it('can return a linked list as a string or array', () => {
    // Arrange
    let list1 = new LinkedList(1);
    list1.insert(2);
    list1.insert(3);
    list1.insert(4);

    // Act
    let result1 = list1.toString();
    let result2 = list1.toArray();

    // Assert
    expect(result1).toEqual('4,3,2,1');
    expect(result2).toEqual([4,3,2,1]);
  });

  it('can append a new node to the end of a list', () => {
    // Arrange
    let list1 = new LinkedList(1);

    // Act
    list1.append(2);
    list1.append(3);
    list1.append(4);

    // Assert
    expect(list1.toString()).toEqual('1,2,3,4');
  })
});
