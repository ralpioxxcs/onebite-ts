/**
 * Pariial Type
 * -> 특정 객체 타입의 모든 proterty를 선택적 property로 바꿔주는 타입
 */


interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  // 특정 객체 타입으로부터 타입들을 union 타입으로
  [key in keyof T]?: T[key]
};

const draft: Partial<Post> = {
  title: "title",
  content: "draft..."
};

//####################################################################

/**
 * Required Type
 * -> 특정 객체 타입의 모든 property를 필수 property로 바꿔주는 타입
 */

type Required<T> = {
  // -?: ?를 뺀다
  [key in keyof T]-? : T[key];
}

const withThumbnailPost: Required<Post> = {
  title: "ts",
  tags: ['ts'],
  content: "ct",
  thumbnailURL: "https://..",
}

//####################################################################

/**
 * Readonly<T>
 * -> 특정 객체 타입의 모든 property를 readonly property로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T] : T[key];
}

const readonlyPost: Readonly<Post> = {
  title: "ts",
  tags: [],
  content: "ct",
  thumbnailURL: "https://..",
};

// readonlyPost.content = ""