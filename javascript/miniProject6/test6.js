// TODO: 사용자 정보를 입력받아, 사용자의 나이에 따라 다른 메시지를 출력하는 함수 userInfo를 작성하세요.
//조건1. 나이(age)가 18세 미만일 경우, 사용자의 이름과 함께 "You are under 18."라는 메시지를 반환합니다.
//조건2. 나이가 18세 이상일 경우, 사용자의 이름, 나이, 그리고 좋아하는 색상을 포함한 메시지를 반환합니다. 예를 들어, "Hello, [이름]! You are [나이] years old, and your favorite color is [색상]."
//조건3. 모든 정보는 매개변수를 통해 함수에 전달되어야 합니다.

function userInfo(name, age, favoriteColor) {
  // 여기에 코드를 작성하세요.
  if (age < 18) {
    return `${name}님은 18세 미만입니다.`;
  } else {
    return `안녕하세요, ${name}님! 당신은 ${age}살이고, 좋아하는 색상은 ${favoriteColor}입니다.`;
  }
}

// 함수를 작성했다면 터미널에 node test6.js를 입력하세요.
// 아래 코드는 작성한 함수를 테스트하기 위한 테스트 함수입니다. 절대 수정하지 마세요!
function testUserInfo() {
  // 테스트 케이스 1: 나이가 18세 미만
  const result1 = userInfo("Alice", 17, "blue");
  console.log(
    result1 === "Alice님은 18세 미만입니다." ? "테스트 1 통과" : "테스트 1 실패"
  );

  // 테스트 케이스 2: 나이가 18세 이상
  const result2 = userInfo("Bob", 25, "green");
  const expected2 =
    "안녕하세요, Bob님! 당신은 25살이고, 좋아하는 색상은 green입니다.";
  console.log(result2 === expected2 ? "테스트 2 통과" : "테스트 2 실패");

  // 추가 테스트 케이스: 정확한 메시지 출력 검증
  const result3 = userInfo("Charlie", 18, "red");
  const expected3 =
    "안녕하세요, Charlie님! 당신은 18살이고, 좋아하는 색상은 red입니다.";
  console.log(result3 === expected3 ? "테스트 3 통과" : "테스트 3 실패");
}

// 테스트 함수 실행
testUserInfo();
