// 결과를 확인하고 싶으면 터미널에 node test1.js를 입력하세요.

// 아래 코드는 구구단 2단을 출력하는 코드입니다.
// for 반복문으로 바꿔 보세요.
let num = 2;
console.log(`${num} x 1 = ${num * 1}`);
console.log(`${num} x 2 = ${num * 2}`);
console.log(`${num} x 3 = ${num * 3}`);
console.log(`${num} x 4 = ${num * 4}`);
console.log(`${num} x 5 = ${num * 5}`);
console.log(`${num} x 6 = ${num * 6}`);
console.log(`${num} x 7 = ${num * 7}`);
console.log(`${num} x 8 = ${num * 8}`);
console.log(`${num} x 9 = ${num * 9}`);

console.log("여기서부터는 반복문을 사용해서 구현한 코드입니다.");
// 조건1. 위 코드와 같은 결과가 나와야 합니다.
// 조건2. for 반복문을 사용해야 합니다.
for (let i = 1; i <= 9; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
