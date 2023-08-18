/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  name: string; // 반드시 동일한 타입으로만!
  age: number;
}

interface Developer extends Person {
  name: "devel"
}

// 합쳐짐
const person: Person = {
  name: "name",
  age: 0
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number,
  b: number
}

interface Lib {
  c: string
}

const lib = {
  a: 1,
  b: 2,
  c: "lib"
}