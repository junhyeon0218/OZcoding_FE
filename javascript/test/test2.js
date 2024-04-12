function solution(s) {
  let a = 0;
  let b = 0;
  var answer = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase().includes("p") === true) {
      a += 1;
    } else if (s[i].toLowerCase().includes("y") === true) {
      b += 1;
    }
  }

  console.log(a, b);

  return a === b ? true : false;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
