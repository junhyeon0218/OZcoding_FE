// 문자열을 공백단위로 나누어서 배열에 넣는다.
// x가 포함된것 끼리 묶는다. 이때 해당 앞 까지
const str = "x + x + x";
const str2 = "1 + 2 + 3";
const str3 = "x + 2 + x";
const str4 = "3 + x + x";

function solution(str) {
  const a = str.split(" ");
  const b = [];
  const c = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes("x")) {
      b.push(a[i - 1], a[i]);
    } else if (a[i] == Number(a[i])) {
      c.push(a[i - 1], a[i]);
    }
  }

  const d = b.filter((e) => e !== undefined).join("");
  const e = c.filter((e) => e !== undefined).join("");
  let f = 0;
  let g = 0;

  for (let i = 0; i < d.length; i++) {
    if (d[i] === "x" && i === 0) {
      f += 1;
    } else if (d[i] == "x" && d[i - 1] != "+") {
      f += Number(d[i - 1]);
    } else if (d[i] == "x" && d[i - 1] == "+") {
      f += 1;
    }
  }

  for (let i = 0; i < e.length; i++) {
    if (e[i] != "+") {
      g += Number(e[i]);
    }
  }

  const h = f + "x";

  if (d[0] === "+" && d.length >= 1) {
    return `${g} + ${h}`;
  } else if (d.length === 0) {
    return `${g}`;
  } else if (e[0] === "+" && e.length >= 1) {
    return `${h} + ${g}`;
  } else if (e.length === 0) {
    return `${h}`;
  }
}

console.log(solution(str));
console.log(solution(str2));
console.log(solution(str3));
console.log(solution(str4));
