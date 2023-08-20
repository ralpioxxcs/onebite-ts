/**
 * Generic interface
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 반드시 <>에 타입을 지정해주어야 한다
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * Index signature
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 1234123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value"
};

let boolMap: Map<boolean> = {
  key: false
};

/**
 * Generic type alias, generic interface와 문법만 다를뿐 거의 비슷
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2 : Map2<string> = {
  key: "string"
}

/**
 * Generic interface usage
 *  -> 유저 관리 프로그램
 *  -> 유저 구분: 학생 유저/ 개발자 유저
 * 
 */

interface Student {
  type: "student",
  school: string;
}

interface Developer{
  type: "developer",
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  /*
  if(user.profile.type !== "student") {
    console.log("you cannot access");
    return;
  }
  */

  const school = user.profile.school;
  console.log(`you arrived at ${school}!`)
}

//goToSchool(developerUser);

const developerUser : User<Developer> = {
  name: "dev",
  profile: {
    type: "developer",
    skill: "TypeScript"
  },
};


const StudentUser : User<Student> = {
  name: "dev2",
  profile: {
    type: "student",
    school: "Seoul Univ"
  },
};