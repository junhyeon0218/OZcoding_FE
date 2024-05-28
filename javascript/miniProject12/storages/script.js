/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. 객체 리터럴을 이용해 사용자 정보를 정의해야합니다.
// 2. JSON.stringify() 메서드를 이용해 객체를 JSON 형식의 문자열로 변환해야합니다.
// 3. JSON.parse() 메서드를 이용해 JSON 형식의 문자열을 객체로 변환해야합니다.
// 4. localstorage.getItem() 메서드를 이용해 사용자 정보를 불러와야합니다.
// 5. localstorage.setItem() 메서드를 이용해 사용자 정보를 저장해야합니다.
// 6. 개발자 도구 Application/Local Storage 에서 저장한 사용자 정보를 확인해야합니다.
/* -----------------------------------------------------------------------------*/

// 사용자 정보 저장 함수
function saveUserInfo() {
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;

  // 'name'과'email'을 키로 사용하는 객체 리터럴 userInfo를 생성하세요.
  // 여기에 코드를 작성하세요
  const userInfo = { name, email };

  // 로컬스토리지에 사용자의 정보를 저장하는 코드를 작성하세요
  // 여기에 코드를 작성하세요
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  document.getElementById(
    "userInfo"
  ).innerText = `이름: ${name}, 이메일: ${email}`;
}

// 로컬 스토리지에서 사용자 정보 불러오는 코드를 작성하세요
// 여기에 코드를 작성하세요
const savedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

// 페이지 로드 시 저장된 사용자 정보가 있으면 화면에 표시
if (savedUserInfo.name && savedUserInfo.email) {
  document.getElementById(
    "userInfo"
  ).innerText = `이름: ${savedUserInfo.name}, 이메일: ${savedUserInfo.email}`;
}
