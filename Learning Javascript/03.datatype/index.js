// 변수 선언
let currentTempC = 22;

let targetTempC; // let targetTempC = undefined; 와 같은 것

// 변수 여러개 선언 (좋은방법은 아닌것 같음)
let targetTempC2,
    room1 = "room1",
    room2 = "room2";

// 상수선언
const ROOM_TEMP_C = 21.5;

// let currentTempC = 22.5;
// currentTempC는 식별자 (identifier)
// 22.5는 숫자 리터럴(literal)

// primitive type
// number string boolean null undefined Symbol

// Object
// javascript 내장객체
// Array Date RegExp Map WeakMap Set WeakSet Number String Boolean

// 데이터 타입 변환
const number = "33.3ae";
const num1 = Number(number); // NaN
const num2 = parseInt(number, 10); // 33.3

const n = 0;
const b1 = !!n; // false
