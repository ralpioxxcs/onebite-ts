/**
 * 타입 추론
 */

let a = 10;     //let a : number = 10;
let b = "hello" // let b : string = "hello";
let c = {
  id: 1,
  name: "name",
  profile: {
    nickname: "nickname",
  },
  urls: ["https://google.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// implicit any
{
  let d;

  d = 10;      // any -> number
  d.toFixed(); // number

  d = "hello";
  d.toUpperCase(); // string
}

// explicit any
{
  let d: any;

  d = 10;      // any -> number
  d.toFixed(); // number

  d = "hello";
  d.toUpperCase(); // string
}

const num = 10; // 상수이기 때문에 number literal로 추론됨
const str = "hello" // string literal

let arr = [1, "string"]; // union type