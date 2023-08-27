/**
 * 조건부 타입
 */

// number타입은 string의 subtype이 아님
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjA는 ObjB의 super type
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number> = "number";
let varB : StringNumberSwitch<string> = 1;

console.log(typeof varA);
console.log(typeof varB);

// overload signature
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text : any) {
  // T가 어떻게 될지 모름
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi hellow wo rld");
console.log(result);

let reuslt2 = removeSpaces(undefined);