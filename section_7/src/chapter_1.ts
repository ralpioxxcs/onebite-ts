/**
 *  First
 */

// 타입을 여러개 사용가능
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, 2);
const [c, d] = swap("1", "2");

/**
 *  Second
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // -> 0

let str = returnFirstValue([1, "hello", "my name is my"]); // -> "hello"

/**
 * Third
 */

// number타입의 length를 가지는 객체를 확장한다
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

//let var4 = getLength(10);