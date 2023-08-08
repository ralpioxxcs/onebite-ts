// void
// void -> 아무것도 없음

function func1(): string {
  return "hello";
};

function func2(): void {
  console.log("hi");
};

function func3(): undefined {
  console.log("hi");
  return undefined;
};

function func4(): null {
  console.log("hi");
  return null;
};

// never
// never , 존재하지 않은, 불가능한 타입
function func5(): never {
  while (true) {}
};

function func6(): never {
  throw new Error();
};

let a: number;
//a = 1;
//a = null;
//a = undefined;

