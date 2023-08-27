/**
 * infer
 */

type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;

// infer를 통해 조건식을 참으로 만들도록 추론함
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // 서로 같음

type B = ReturnType<FuncB>; // 교집합이 없음, 서로소

// number 타입의 subtype이 되는타입을 추론해라 -> 불가 -> "never"
type C = ReturnType<number>;

/**
 * example
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R: never;
// 1. T 는 무조건 "Promise" 타입
// 2. Promise type의 결과값 타입을 반환해야 한다

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string