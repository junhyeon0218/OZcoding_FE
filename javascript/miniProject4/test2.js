// 결과를 확인하고 싶으면 터미널에 node test2.js를 입력하세요.

// for 반복문으로 문자열의 짝수 번째 요소를 출력하는 코드를 작성하세요.
let str = " 이 것 은 반 복 문 을 위 한 테 스 트 입 니 다";
for (let i = 0; i < str.length; i += 2) {
  console.log(`${str[i + 1]}`);
}
