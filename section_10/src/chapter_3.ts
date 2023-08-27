/**
 * Exclude<T, U>
 * -> T에서 U를 제거
 */

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean>  |
// Exclude<boolean, boolean> |

// 2단계
// string | 
// never

// 결과
// string

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> T에서 U를 추출
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;
type C = Extract<boolean, boolean | string>;
type D = Extract<number, boolean | string>;

/**
 * ReturnType
 * -> 함수의 반환값 타입 추출
 *
 */

// T 를 함수타입만 받을 수 있게
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return true
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;