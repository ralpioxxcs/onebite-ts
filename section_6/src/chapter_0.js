/**
 * 클래스
 */

let studentA = {
  name: "student a",
  grade: "A+",
  age: 1,

  study() {
    console.log("study!!");
  },

  introduce() {
    console.log("hello");
  },
};

let studentB = {
  name: "student b",
  grade: "B-",
  age: 2,

  study() {
    console.log("study!!");
  },

  introduce() {
    console.log("hello");
  },
};

class Student {
  // field
  name;
  grade;
  age;

  // constructor
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // method
  study() {
    console.log("now study hard!");
  }

  introduce() {
    console.log(`hello, I am "${this.name}".`);
  }
}

class StudentDeveloper extends Student {
  // field
  favoriteSkill;

  // constructor
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);

    this.favoriteSkill = favoriteSkill;
  }

  // method
  programming() {
    console.log(`I am programming using "${this.favoriteSkill}".`)
  }
}
// instance
let developerStudent = new StudentDeveloper("student c", "F", 40, "Rust");

console.log(developerStudent);

developerStudent.study();
developerStudent.introduce();
developerStudent.programming();