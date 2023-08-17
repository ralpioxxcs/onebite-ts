/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 하나의함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1) 매개변수가 1개 -> 매개변수 * 20
 * -> Ver2) 매개변수가 3개 -> 매개변수 SUM
 * 
 */

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처 (implementation signature)
function func(a: number, b?: number, c?: number) {
  if(typeof b === 'number' && typeof c === 'number') {
    console.log(a+b+c);
  } else {
    console.log(a*20);
  }
}

func(1);
func(1,2,3);