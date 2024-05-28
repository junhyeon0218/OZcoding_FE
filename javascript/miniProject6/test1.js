// TODO: 함수 선언문으로 정의된 함수를 함수 표현식으로 다시 정의해 보세요.
function functionDeclaration() {
  console.log("hello world");
}
// 여기에 작성하세요. 함수명은 functionExpression으로 작성하세요.
const functionExpression = function () {
  console.log("hello world");
};

// 함수 표현식으로 함수를 정의했다면 터미널에 node test1.js를 입력하세요. 아래 코드로 인해 함수가 호출되어 'hello world'가 출력되면 성공입니다. (아래 코드는 수정하지 마세요.)
functionExpression();
