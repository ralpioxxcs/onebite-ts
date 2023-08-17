/**
 * 함수 타입 표현식, function type expression
 */

type Operation = (a: number, b: number) => number;

//const add: Operation = (a, b) => a + b;
const add: (a: number, b: number) => number = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 (콜 시그니처)
 */
// 자바스크립트의 함수도 객체이기 때문에 중괄호를 사용
type Operation2 = {
  (a: number, b: number): number;
  name: string; // hybrid type
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(2,3);
add2.name;