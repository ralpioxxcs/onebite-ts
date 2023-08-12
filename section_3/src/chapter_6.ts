/**
 * 타입 단언 (assertion)
 */

type Person = {
  name: string,
  age: number;
};

let person = {} as Person;
person.name = "name";
person.age = 0;

type Dog = {
  name: string,
  color: string
};

let dog = {
  name: "꼬맹이",
  color: "white",
  breed: "몰티즈"
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * -> A가 B의 super type이거나
 * -> A가 B의 sub type이어햐 함
 */

let num1 = 10 as never;   // "10" is supertype of "never"

let num2 = 10 as unknown; // "10" is subtype of "unknown"

// let num3 = 10 as string;
let num3 = 10 as unknown as string; // "10" is subtype of "unknown" and it is supertype of "string"

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
  name : "cat",
  color : "black",
} as const;

// cat.name = ''

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "어써",
};

//const len : number = post.author?.length; // null 이 아닐것이라고 단언
const len : number = post.author!.length; // null 이 아닐것이라고 단언
