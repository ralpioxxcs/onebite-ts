/**
 * Pick<T, K>
 * -> 객체 타입으로부터 특정 property만 골라내는 타입
 * -> the type that get specific property from object type
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// T로 들어오는 객체 타입의 key값들을 추출한 union타입의 subtype만 들어올 수 있음
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const oldPost: Pick<Post, 'title' | 'content'> = {
  title: "old title",
  content: "old content",
};

//############################################################

/**
 * Omit<T,K>
 * -> 객체 타입으로부터 특정 property를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T,K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title' >>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL' >

const noTitlePost: Omit<Post, 'title'> = {
  content: "",
  tags: [],
  thumbnailURL: "https://..",
};

//############################################################

/**
 * Record<K, V>
 */

type Record<K extends keyof any, V> = {
  [key in K]: V
}

type ThumbnailLegacy = {
  large: {
    url: string;
  },
  medium: {
    url: string;
  },
  small: {
    url: string;
  },
  watch: {
    url: string;
  }
};

type Thumbnail = Record<
  'large' | 'medium' | 'small' | 'watch',
  { url: string, size: number }
>;
