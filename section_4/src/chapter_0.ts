/**
 * 함수 타입 정의
 */

// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수 타입을 정의
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "christopher", age: number, tall?: number) {
  console.log(`name: ${name}`);

  // 선택적 매개변수이므로 조건문을 작성
  if (typeof tall == "number") {
    console.log(`tall: ${tall + 10}`)
  }
}

introduce("christopher nolan", 0, 188);

introduce("robert", 1);

function getSum(...rest: number[]) {
//function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it))
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5)