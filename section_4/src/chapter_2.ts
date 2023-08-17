/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 
 * 1. 반환값의 타입이 호환되는지
 * 2. 매개변수의 타입이 호환되는지
 */


// 기준1) 반환값이 호환되는지
type A = () => number;
type B = () => 10;

let a:A = () => 10; // number
let b:B = () => 10; // number literal

a = b;   // upcasting (number literal -> number)
//b = a; // downcasting, (number -> number literal)

// 기준2) 매개변수의 타입이 호환되는지
// 2-1) 매개변수의 개수가 같음
type C = (value:number) => void;
type D = (value:10) => void;

let c : C = (value) => {};
let d : D = (value) => {};

// c = d; // 매개변수의 호환의경우, upcasting이 안됨
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);

};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc
dogFunc = animalFunc;

// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// }

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
}



// 2-2) 매개변수의 개수가 다름
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1; // func1의 매개변수는 2개인데 func2의 매개변수는 1개