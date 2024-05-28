// TODO: 함수 내부에 선언된 변수 num1과 num2의 타입이 숫자일 경우, 두 수의 합을 반환하는 함수 add를 정의하세요. (매개변수를 사용하지 않습니다.)
function add() {
  // 여기에 코드를 작성하세요.
  let num1 = 2;
  let num2 = 1;
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
}
// 함수를 작성했다면 터미널에 node test4.js를 입력하세요.

// 아래 코드는 작성한 함수를 테스트하기 위한 테스트 함수입니다. 절대 수정하지 마세요!
function testAddFunction() {
  const result = add(); // add 함수 호출

  // 결과값이 예상되는 범위 내에 있는지 검증
  if (typeof result === "number") {
    console.log(
      `정답입니다: add 함수를 호출한 결과가 ${typeof result}타입입니다.`
    );
  } else {
    console.log(
      `정답이 아닙니다. add 함수를 호출한 결과가 number타입이어야 합니다. 지금은 ${typeof result} 타입입니다.`
    );
  }
}

// 테스트 함수 실행
testAddFunction();
