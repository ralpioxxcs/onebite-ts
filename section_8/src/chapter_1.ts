/**
 * Indexed access type
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location: string;
  };
}[];

const key = "author";

// function printAuthorInfo(author: Post[key]) {

// function printAuthorInfo(author: Post["none"]) {

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}, location: ${author.location}`);
}

const num = 0;

// 배열 요소의 타입을 추출한다, 

// number literal만 가능함
/*
const post: PostList[num] ={
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 0,
    name: "name",
    age: 10,
    location: "Seoul"
  }
};
*/

const post: PostList[number] ={
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 0,
    name: "name",
    age: 10,
    location: "Seoul"
  }
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup1 = Tup[0];
type Tup2 = Tup[1];
type Tup3 = Tup[2];
type TupNum = Tup[number];

const tupNum: Tup1 = 1;
const tupStr: Tup2 = "string";
const tupBool: Tup3 = true;

const tuples: TupNum = 1;