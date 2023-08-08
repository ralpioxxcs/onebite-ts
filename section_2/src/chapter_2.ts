// array
let numArr:number[] = [1,2,3];

let strArr:string[] = ["hello", "im", "ralpioxxcs"];

let boolArr:Array<boolean> = [true, false, true]

// 배열에 들어가는 요소들의 타입이 다양한경우
let multiArr:(string | number)[] = [1, "hello"];

// 다차원 배열의타입 정의
let doubleArr: number[][] = [
  [1,2,3],
  [4,5],
];

// Tuple
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1,2];
//tup1 = [1, 2, 3];
//tup1 = ["1", "2"]

let tup2: [number, string, boolean] = [1, "2", true]
//tup2 = [1,2]

const users: [string, number][] = [
  ["김재홍", 1],
  ["이우정", 2],
  // [3, "리용규"], -> false!
];
