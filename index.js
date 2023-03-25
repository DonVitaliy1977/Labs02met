'use strict';

class linkedListNode {
  constructor(value, numb, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
    this.numb = numb;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    let Integer = 0;
    if (!this.head) return Integer;
    let currentNode = this.head;
    while (currentNode) {
      Integer++;
      currentNode = currentNode.next;
    }
    return Integer;
  }

  append(value) {
    const newNode = new linkedListNode(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    newNode.prev = this.tail;
    this.tail = newNode;
    this.tail.numb = this.length() - 1;

    if (!this.head) {
      this.head = newNode;
      this.tail.numb = 0;
    }

    return this;
  }

  delete(number) {
    if (!this.head) {
      return null;
    }
    if (number < 0 || number >= this.length()) {
      return null;
    }
    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.numb === number) {
        deletedNode = currentNode;
        if (deletedNode === this.head) {
          this.head = deletedNode.next;
          if (this.head) {
            this.head.prev = null;
          }
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          console.log(deletedNode.prev);
          this.tail = deletedNode.prev;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.prev;
          const nextNode = deletedNode.next;
          previousNode.next = nextNode;
          nextNode.prev = previousNode;
        }
      }

      currentNode = currentNode.next;
    }
    currentNode = this.head;
    let count = 0;
    while (currentNode) {
      currentNode.numb = count++;
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  deleteAll(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;
        if (deletedNode === this.head) {
          this.head = deletedNode.next;
          if (this.head) {
            this.head.prev = null;
          }
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          console.log(deletedNode.prev);
          this.tail = deletedNode.prev;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.prev;
          const nextNode = deletedNode.next;
          previousNode.next = nextNode;
          nextNode.prev = previousNode;
        }
      }

      currentNode = currentNode.next;
    }
    currentNode = this.head;
    let count = 0;
    while (currentNode) {
      currentNode.numb = count++;
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.prev;
      currNode.next = prevNode;
      currNode.prev = nextNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    currNode = this.head;
    let count = 0;
    while (currNode) {
      currNode.numb = count++;
      currNode = currNode.next;
    }
    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  get(number) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.numb === number) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  findFirst(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode.numb;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  findLast(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.tail;
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode.numb;
      }
      currentNode = currentNode.prev;
    }
    return -1;
  }

  insert(value, number) {
    const newNode = new linkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    if (number === this.length()) {
      this.append(value);
      return this;
    }

    if (number < 0 || number > this.length()) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.numb === number) {
        number === 0
          ? (this.head = newNode)
          : (currentNode.prev.next = newNode);
        newNode.prev = number === 0 ? null : currentNode.prev;
        newNode.next = currentNode;
        currentNode.prev = newNode;
      }
      currentNode = currentNode.next;
    }

    currentNode = this.head;
    let count = 0;
    while (currentNode) {
      currentNode.numb = count++;
      currentNode = currentNode.next;
    }
    return this;
  }

  clone() {
    if (!this.head) {
      return null;
    }
    let cloneList = new LinkedList();
    q;
    let currentNode = this.head;
    while (currentNode) {
      cloneList.append(currentNode.value);
      currentNode = currentNode.next;
    }

    return cloneList;
  }

  extend(listAdd) {
    if (!listAdd.head) {
      return null;
    }
    let currentNode = listAdd.head;
    while (currentNode) {
      this.append(currentNode.value);
      currentNode = currentNode.next;
    }

    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}

// const list = new LinkedList();
// const list2 = new LinkedList();
// // // console.log(`length0 = ${list.length()}`);

// list.append('a').append('b').append('c').append('d');
// list2.append('e').append('f').append('g');
// const ext = list.extend(list2);
// console.log(list.head);
// console.log(list.tail);
// console.log(list.toArray());
// console.log(list.toString());

// console.log(ext.head);
// console.log(ext.tail);
// console.log(ext.toArray());
// console.log(ext.toString());
// list.append('e');
// console.log(ext.head);
// console.log(ext.tail);
// console.log(ext.toArray());
// console.log(ext.toString());

// console.log(`list - ${list.toString()}`);

// console.log(`list2 - ${list2.toString()}`);

// list.insert('g', 2);
// console.log(list.head);
// console.log(list.tail);

// console.log(list.toArray());
// console.log(list.toString());
// list.insert('h', 2);
// console.log(list.toArray());
// console.log(list.toString());

// list.clear();

// console.log(list.toArray());
// console.log(list.toString());
// list.delete('a');
// console.log(list.head);
// console.log(list.tail, '\n');
// console.log(list.toArray());
// console.log(list.toString());

// console.log(`length1 = ${list.length()}`);
// console.log(list.head);
// console.log(list.tail, '\n');

// list.append('b');
// console.log(`length1 = ${list.length()}`);
// console.log(list.head);
// console.log(list.tail, '\n');

// list.append('c');
// console.log(`length1 = ${list.length()}`);
// console.log(list.head);
// console.log('!!!', list.tail.prev);

// console.log(list.tail, '\n');
// console.log(list.toArray());
// console.log(list.toString());
module.exports = LinkedList;
