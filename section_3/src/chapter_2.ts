/**
 * Unknown Type
 */
function unknownExam() {
  // Upcasting 
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // Downcasting
  //let num: number = unknownVar;
  //let str: string = unknownVar;
  //let bool: boolean = unknownVar;
}

/**
 *  Never Type
 */
function neverExam() {
  function neverFunc() : never {
    while (true) {}
  }

  // Upcasting
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // Downcasting
  // let never1: never = 10; 
  // let never2: never = "string"; 
  // let never3: never = true; 
}

/**
 * Void Type
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  // Upcasting
  let voidVar: void = undefined;
}

/**
 * Any Type
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  
  // Possible upcasting, downcasting
  anyVar = unknownVar;

  undefinedVar = anyVar;

  // Except "never" type
  // neverVar = anyVar;
}
