/**
 * Promise
 */

import { resolve } from "path";

// 비동기 작업의 결과값의 타입
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    // resolve("20"); (x)

    reject("~~ failed");
  }, 1000);
});

promise.then((response) => {
  console.log(response * 10);
}).catch((err) => {
  if (typeof err === "string") {
    console.error(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "title",
        content: "content",
      });
    }, 1000)
  });
}

const postReq = fetchPost();

postReq.then((post) => {
  post.id
});
