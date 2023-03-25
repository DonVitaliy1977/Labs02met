const LinkedList = require('./index');

function init() {
  const list = new LinkedList();

  list.append('a').append('b').append('c').append('d');

  return list;
}

describe('Linked List', () => {
  test('length', () => {
    let list = init();

    expect(list.length().toString()).toBe('4');
    list.append('x');
    expect(list.length().toString()).toBe('5');
  });

  test('length of empty list', () => {
    const list = new LinkedList();

    expect(list.length().toString()).toBe('0');
  });

  test('Append', () => {
    let list = init();

    expect(list.append('x').toString()).toBe('a,b,c,d,x');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('x');
  });

  test('Append is empty list', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    expect(list.append('a').toString()).toBe('a');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('a');
  });

  test('Delete head', () => {
    let list = init();
    expect(list.delete(0).toString()).toBe('a');
    expect(list.toString()).toBe('b,c,d');
    expect(list.head.value).toBe('b');
    expect(list.tail.value).toBe('d');
  });

  test('Delete tail', () => {
    let list = init();
    expect(list.delete(3).toString()).toBe('d');
    expect(list.toString()).toBe('a,b,c');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('c');
  });

  test('Delete middle', () => {
    let list = init();
    expect(list.delete(1).toString()).toBe('b');
    expect(list.toString()).toBe('a,c,d');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('d');
  });

  test('Delete error', () => {
    let list = init();
    expect(list.delete(5)).toBe(null);
    expect(list.delete(-5)).toBe(null);
  });

  test('DeleteAll head', () => {
    let list = init();
    expect(list.deleteAll('a').toString()).toBe('a');
    expect(list.toString()).toBe('b,c,d');
    expect(list.head.value).toBe('b');
    expect(list.tail.value).toBe('d');
  });

  test('DeleteAll tail', () => {
    let list = init();
    expect(list.deleteAll('d').toString()).toBe('d');
    expect(list.toString()).toBe('a,b,c');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('c');
  });

  test('DeleteAll middle', () => {
    let list = init();
    list.append('b').append('e');
    expect(list.toString()).toBe('a,b,c,d,b,e');
    expect(list.deleteAll('b').toString()).toBe('b');
    expect(list.toString()).toBe('a,c,d,e');

    expect(list.deleteAll('c').toString()).toBe('c');
    expect(list.toString()).toBe('a,d,e');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('e');
  });

  test('DeleteAll error', () => {
    let list = init();
    expect(list.deleteAll('f')).toBe(null);
    expect(list.deleteAll(-5)).toBe(null);
  });

  test('Reverse', () => {
    let list = init();
    expect(list.reverse().toString()).toBe('d,c,b,a');
  });

  test('Clear', () => {
    let list = init();
    list.clear();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('FindFirst', () => {
    let list = init();
    list.append('b').append('e');
    expect(list.toString()).toBe('a,b,c,d,b,e');
    expect(list.findFirst('b')).toBe(1);
    expect(list.findFirst('r')).toBe(-1);
  });

  test('FindLast', () => {
    let list = init();
    list.append('b').append('e');
    expect(list.toString()).toBe('a,b,c,d,b,e');
    expect(list.findLast('b')).toBe(4);
    expect(list.findLast('r')).toBe(-1);
  });

  test('Get', () => {
    let list = init();
    expect(list.get(2).toString()).toBe('c');
    expect(list.get(-2)).toBe(null);
  });

  test('Insert', () => {
    let list = init();
    expect(list.insert('g', 2).toString()).toBe('a,b,g,c,d');
    expect(list.insert('h', 2).toString()).toBe('a,b,h,g,c,d');
    expect(list.insert('m', 0).toString()).toBe('m,a,b,h,g,c,d');
    expect(list.insert('r', 7).toString()).toBe('m,a,b,h,g,c,d,r');
  });

  test('Insert error', () => {
    let list = init();
    expect(list.insert('g', -2)).toBe(null);
    expect(list.insert('h', 12)).toBe(null);
  });

  test('Clone', () => {
    let list = init();
    let cloneList = list.clone();
    expect(list.clone().toString()).toBe('a,b,c,d');
    expect(list.append('e').toString()).toBe('a,b,c,d,e');
    expect(cloneList.toString()).toBe('a,b,c,d');
  });

  test('Extend', () => {
    let list = init();
    let list2 = init();
    expect(list.extend(list2).toString()).toBe('a,b,c,d,a,b,c,d');
    list2.append('e');
    expect(list.toString()).toBe('a,b,c,d,a,b,c,d');
  });

  test('Extend empty list', () => {
    let list = init();
    let list2 = new LinkedList();
    expect(list.extend(list2)).toBe(null);
    expect(list.toString()).toBe('a,b,c,d');
  });
});
