/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;

  //sayHi: () => void;
  //sayHi: (a: number, b: number) => void; => (x)

  // 메서드를 오버로딩할 경우 호출 시그니처 사용
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "name",

  // method
  sayHi: function() {
    console.log("hi");
  }
};

person.sayHi();
person.sayHi(1, 2);