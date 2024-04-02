// 문자열을 공백단위로 나누어서 배열에 넣는다.
// x가 포함된것 끼리 묶는다. 이때 해당 앞 까지
const str = "3x + 7 + x - 4 - 3x + 5x";

function solution(str) {
  const a = str.split(" ");
  const b = [];
  const c = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes("x")) {
      b.push(a[i - 1], a[i]);
    } else if (a[i] == Number(a[i])) {
      c.push(a[i - 1], a[i]);
    } else {
    }
  }

  console.log(b.filter((e) => e !== undefined).join(""));
  console.log(c.filter((e) => e !== undefined).join(""));
}

console.log(solution(str));
