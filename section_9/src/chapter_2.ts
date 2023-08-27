/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// 조건 분산 안되게 하려면
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<string | number>;

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string>   |
// Exclude<string, string>   |
// Exclude<boolean , string> |

// 2 단계
// number  |
// never   |
// boolean |

// 결과
// never타입은 공집합이므로 union에서 제외된다
// =>> " number | boolean "

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string>     |
// Extract<string, string>     |
// Extract<boolean, string>    |

// 2 단계
// never |
// string|
// never |

// 결과
// "string"