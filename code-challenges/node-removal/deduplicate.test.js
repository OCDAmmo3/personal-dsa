'use strict';

const LinkedList = require('../../structures/linked-lists/linked-lists');
const deduplicate = require('./deduplicate');
const { insertManyUnique, insertManySimilar } = require('../../test-values');

describe('Deduplicating Tests', () => {
  it('should remove all duplicate nodes from a linked list, leaving only the first instance', () => {
    // Arrange
    let list1 = new LinkedList(1);
    list1.insert(2);
    list1.insert(2);
    list1.insert(3);
    list1.insert(3);
    list1.insert(3);
    let newListSimilar = insertManySimilar();

    // Act
    let result1 = deduplicate(list1);
    let result2 = deduplicate(newListSimilar);

    // Assert
    expect(result1.toString()).toEqual('3,2,1');
    expect(result2.toString()).toEqual('5,4,3,2,1');
  });

  it('should remove nothing if all nodes are unique', () => {
    // Arrange
    let newListUnique = insertManyUnique();

    // Act
    let result1 = deduplicate(newListUnique);

    // Assert
    expect(result1.toString()).toEqual('10,9,8,7,6,5,4,3,2,1');
  })
});
