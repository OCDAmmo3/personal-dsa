'use strict';

const mergeLists = require('./llmerge');
const LinkedList = require('../../structures/linked-lists/linked-lists');

describe('Merging of two linked lists test', () => {
  it('can merge 2 linked lists together alternating', () => {
    // Arrange
    let list1 = new LinkedList(1);
    let list2 = new LinkedList(1);
    let list3 = new LinkedList(1);
    list1.append(2);
    list1.append(3);
    list2.append(4);
    list2.append(5);
    list3.append(6);
    list3.append(7);

    // Act
    let result1 = mergeLists(list1, list2);
    let result2 = mergeLists(list1, list3);
    let result3 = mergeLists(result1, result2);

    // Assert
    expect(list1.toString()).toEqual('1,2,3');
    expect(list2.toString()).toEqual('1,4,5');
    expect(list3.toString()).toEqual('1,6,7');
    expect(result1.toString()).toEqual('1,1,2,4,3,5');
  })
})