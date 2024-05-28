// 결과를 확인하고 싶으면 터미널에 node test3.js를 입력하세요.

// 1부터 10까지의 모든 숫자의 합을 구하는 코드를 작성하세요.
// while 반복문으로 구현해야 합니다.
let num = 1;
let result = 0;
while (num <= 10) {
  result += num;
  num++;
}

console.log(result);
