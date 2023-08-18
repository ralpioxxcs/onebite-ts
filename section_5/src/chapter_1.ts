/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

/*
type Animal {
  name: string;
  age: number;
}
*/

interface Dog extends Animal {
  //name: number ==> (x) 재정의할때에는 원본타입의 서브타입이 되어야 함

  isBark: boolean
}

interface Cat extends Animal {
  isScratch: boolean
}

interface Chicken extends Animal {
  isFly: boolean
}

interface CatDog extends Cat, Dog {
  isMerge?: boolean 
}

const catdog: CatDog = {
  name: "catdog",
  age: 1,
  isBark: true,
  isScratch: true
}

const dog: Dog = {
  name: "hellos",
  age: 13,
  isBark: true
}

const chicken: Chicken = {
  name: "s",
  age: 13,
  isFly: true
}