// TODO: 삼각형의 높이와 밑변의 길이를 입력받아 삼각형의 너비를 구하는 함수 triangle을 정의하세요. (삼각형의 높이와 밑변의 길이는 외부에서 전달받도록 코드를 작성해야 합니다.)
function triangle(a, b) {
  // 여기에 코드를 작성하세요.
  return (a * b) / 2;
}

// 함수를 작성했다면 터미널에 node test5.js를 입력하세요.
// 아래 코드는 작성한 함수를 테스트하기 위한 테스트 함수입니다. 절대 수정하지 마세요!
function testTriangleFunction() {
  const test1 = triangle(10, 5);
  console.log(
    `테스트 1 (높이: 10, 밑변: 5): 예상 결과는 25, 실제 결과는 ${test1}`
  );

  const test2 = triangle(7, 4);
  console.log(
    `테스트 2 (높이: 7, 밑변: 4): 예상 결과는 14, 실제 결과는 ${test2}`
  );

  const test3 = triangle(12.5, 6.5);
  console.log(
    `테스트 3 (높이: 12.5, 밑변: 6.5): 예상 결과는 약 40.625, 실제 결과는 ${test3}`
  );
}

// 테스트 함수 실행
testTriangleFunction();
