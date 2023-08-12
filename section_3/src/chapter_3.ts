/**
 * 기본 타입간 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은지
 */
type Animal = {
  name: string,
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "사자",
  color: "brown",
};

let dog: Dog = {
  name: "꼬맹이",
  color: "white",
  breed: "몰티즈",
};

animal = dog;
//dog = animal;

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;   // upcasting
//programmingBook = book; // downcasting

/**
 * 초과 Property 검사
 */
type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //skill: "reactjs"
};

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs"
})

func(programmingBook);