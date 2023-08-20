/**
 * Generic
 */

// generic function, 타입은 함수를 호출할 때 결정된다
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();

if (typeof num === 'number') {
  num.toFixed();
}

let bool = func(true);
console.log(bool);

let str = func("string");
console.log(str);

// tuple type
let arr = func<[number, number, number]>([1, 2, 3]);
console.log(arr);
