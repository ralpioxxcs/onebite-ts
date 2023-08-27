/**
 * keyof operator
 */

/*
interface Person {
  name: string;
  age: number
}
*/

type Person = typeof person;


// keyof -> 객체 타입의 모든 property의 key들을 union 타입으로 만들어줌 (type에만 사용가능)
//function getPropertyKey(person: Person, key: keyof Person) {
//  return person[key];
//}

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "이름",
  age: 30
}

getPropertyKey(person, "name");
