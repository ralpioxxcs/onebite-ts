/**
 * Generic class
 */

class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3, 4, 5]);

numberList.pop();
numberList.push(10);
numberList.print();


const strList = new List(['1', '2', '3', '4', '5']);

strList.pop();
strList.push('10');
strList.print();