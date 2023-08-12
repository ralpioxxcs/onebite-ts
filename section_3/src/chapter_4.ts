/**
 * 대수 타입
 *  -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 *  -> 합집합 타입과 교집합 타입이 존재
 */


/**
 * 1. 합집합 - Union Type
 */

let a : string | number | boolean;

a = 1;
a = "a";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string,
  color: string
};

type Person = {
  name: string,
  language: string
};

type Dorson = Dog | Person

let dorson1 : Dorson = {
  name: "",
  color: ""
};

let dorson2 : Dorson = {
  name: "",
  language: "",
};

let dorson3 : Dorson = {
  name: "",
  color: "",
  language: "",
};

//let dorson4 : Dorson = {
//  name: "",
//};

/**
 * 2. 교집합 타입 - Intersection Type
 */

let variable : number & string; // -> never

type Intersection = Dog & Person;

let intersection1 : Intersection = {
  name: "",
  color: "",
  language: ""
};


