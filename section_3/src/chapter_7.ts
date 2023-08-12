/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string,
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime 
// value => Person : name is age
function func(value: number | string | Date | null | Person) {
  console.log(typeof (value));

  //value.toUpperCase();
  //value.toFixed();

  // 특정 조건문 내부에서 타입이 보장되면, 좁은 타입으로 추론됨
  // type guard
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());

    //} else if (typeof value === 'object') {
    //  console.log(value.getTime());
    //}

  } else if (value instanceof Date) {
    console.log(value.getTime());

    //} else if (value instanceof Person) { // Person은 class가 아니다.
    //  console.log(value.getTime());
    //}

  } else if (value && "age" in value) {
    console.log(`${value.name} is ${value.age}.`)
  }
}

func({
  name: "hi",
  age: 223
});

