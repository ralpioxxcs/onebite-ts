/**
 * mapped type
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // key가 'id'일 수 있고, 'name'일 수도 있고, 'age'일 수도있다
  [key in 'id' | 'name' | 'age']?: User[key];
  //        key                     value

  // user["id"] -> number
  // user["name"] -> string
  // user["age"] -> number
};

// keyof 연산자 활용
type BooleanUser = {
  [key in keyof User]: boolean;
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // .. 기능
  return {
    id: 1,
    name: "name",
    age: 27,
  };
}

const user = fetchUser();
// user.age = 2 (x)

function updateUser(user: PartialUser) {
  // .. 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "name",
  age: 25,
});