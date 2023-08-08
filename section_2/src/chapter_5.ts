// enum type
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10,
  USER, // 11
  GUEST, // 12
};

enum Language {
  korea = "ko",
  english = "en",
};

const user1 = {
  name : "Jake",
  role: Role.ADMIN,
  Language: Language.english,
};

const user2 = {
  name : "Jordan",
  role: Role.USER,
  Language: Language.english,
};

const user3 = {
  name : "James",
  role: Role.GUEST,
  Language: Language.korea,
};

console.log(user1, user2, user3)
