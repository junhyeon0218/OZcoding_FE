//String
const a: string = "a";
// const b: string = `hi, ${myName}`;

let c: string = "c";
// c = 123; // 오류가 나온다.

// Number
let num: number = 123;
// num.toUpperCase(); // 문자열에 사용 가능한 함수는 사용 불가능

let count: number = 10;
let price: number = 9.99;

let total: number = count * price;

let infinity: number = Infinity;
let minusinfinity: number = -Infinity;
let nan: number = NaN;

//Boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("open");
}

if (!isCompleted) {
  console.log("completed");
}

let isAvailable: boolean = isOpen && !isCompleted;

//Null
let user: string | null = null; // 한 가지 이상의 타입을 유니온타입

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

//Any
let e: any;

e.toString();
e = false;
e.toFixed();
// 다 가능하다. 안정성을 위해 사용을 최소화 해야한다.
