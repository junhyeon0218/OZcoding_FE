// 1. table 대신 flexbox를 사용하여 요소들을 정렬해야 합니다.
// 2. 입력받아야 하는 정보와 사용할 요소는 아래와 같습니다.
//     - 이름: `input:text`
//     - 주민번호: `input:text` - `input:password`
//     - 아이디: `input:text`
//     - 비밀번호: `input:password`
//     - 비밀번호 확인: `input:password`
//     - 이메일: `input:text` + `select`
//     - 주소: `input:text`
//     - 성별: `input:radio`
//     - 개인정보 동의: `input:checkbox`
// 3. 모든 항목은 필수 입력 항목이어야 합니다.
// 4. 비밀번호와 비밀번호 확인이 일치하지 않는 경우, 알림창으로 유저에게 알려야 합니다.
// 5. 아이디는 4글자 이상, 8글자 이하로 입력해야 합니다. 그렇지 않을 경우 알림창으로 유저에게 알려야 합니다.
// 6. submit 이벤트가 발생했을 때 새로고침이 일어나지 않아야 합니다.
// 7. 회원가입 버튼을 클릭했을 때 콘솔창에 입력한 모든 정보가 출력되어야 합니다.

// form 요소를 선택
const form = document.querySelector("form");

// 입력한 정보를 객체로 만들어 반환하는 함수를 제공합니다.
// HINT. 이 함수를 이벤트리스너 내부에서 호출하세요.
function getUserInfo(
  name,
  ssn_front,
  ssn_back,
  username,
  password,
  emailId,
  mailbox,
  address,
  gender,
  agree
) {
  const userInfo = {
    name: name,
    ssn: ssn_front + "-" + ssn_back,
    username: username,
    password: password,
    email: emailId + "@" + mailbox,
    address: address,
    gender: gender,
    agree: agree,
  };
  return userInfo;
}

// 각 요소 변수 선언
const userName = document.querySelector("#name");
const userNum = document.querySelector("#num");
const userNum2 = document.querySelector("#num2");
const userId = document.querySelector("#id");
const userPwd = document.querySelector("#pwd");
const userPwd2 = document.querySelector("#pwd2");
const userEmail = document.querySelector("#email");
const domain = document.querySelector("#domain");
const userAdd = document.querySelector("#add");
const userGender = document.querySelectorAll(".gender");
const userAgree = document.querySelector("#check");
const btn = document.querySelector("#signup");
const input = document.querySelectorAll(".input");

// 모달
const modal = document.querySelector(".modal");
modal.style.display = "none";

// 이름 한글만 가능
userName.addEventListener("input", function () {
  let pattern = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
  if (!pattern.test(this.value)) {
    this.value = this.value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "");
  }
  if (this.value.length < 2 || this.value.length > 10) {
    this.style.border = "2px solid rgba(255, 0, 0, 0.6)";
  } else {
    this.style.border = "1px solid #112d4e";
  }
});

// 주민번호 숫자만 가능
userNum.addEventListener("input", function () {
  let pattern = /^[0-9]{0,6}$/;
  if (!pattern.test(this.value)) {
    this.value = this.value.slice(0, 6).replace(/\D/g, "");
  }
  if (this.value.length < 6) {
    userNum.style.border = "2px solid rgba(255, 0, 0, 0.6)";
  } else if (this.value.length === 6) {
    userNum.style.border = "1px solid #112d4e";
  }
});

// 주민번호 뒷자리 첫번째 1~4만 입력 가능
userNum2.addEventListener("input", function () {
  let pattern = /^[1-4]$/;
  if (!pattern.test(this.value)) {
    this.value = this.value
      .slice(0, 1)
      .replace(/\D/g, "")
      .replace(/[^1-4]/g, "");
  }
  if (this.value === "") {
    userNum2.style.border = "2px solid rgba(255, 0, 0, 0.6)";
  } else if (this.value.length === 1) {
    userNum2.style.border = "1px solid #112d4e";
  }
});

// 아이디 영문 4~12글자
userId.addEventListener("input", function () {
  let pattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,12}$/;
  if (!pattern.test(this.value)) {
    this.value = this.value.slice(0, 12).replace(/[^a-zA-Z0-9]/g, "");
  }
  if (this.value.length < 4) {
    userId.style.border = "2px solid rgba(255, 0, 0, 0.6)";
  } else if (this.value.length >= 4) {
    userId.style.border = "1px solid #112d4e";
  }
});

// 비밀번호 8자 이상
userPwd.addEventListener("input", function () {
  let pattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
  if (!pattern.test(this.value)) {
    this.value = this.value.slice(0, 20).replace(/[^a-zA-Z\d]/g, "");
  }
  if (this.value.length < 8) {
    userPwd.style.border = "2px solid rgba(255, 0, 0, 0.6)";
  } else if (this.value.length >= 8) {
    userPwd.style.border = "1px solid #112d4e";
  }
});

// 비밀번호 확인
userPwd2.addEventListener("input", function () {
  console.log(this.value);
  if (this.value !== userPwd.value) {
    userPwd2.style.border = "2px solid rgba(255, 0, 0, 0.6)";
  } else {
    userPwd2.style.border = "1px solid #112d4e";
  }
});

// 이메일
userEmail.addEventListener("input", function () {
  let pattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,20}$/;
  if (!pattern.test(this.value)) {
    this.value = this.value.slice(0, 20).replace(/[^a-zA-Z0-9]/g, "");
  }
  if (this.value.length < 4) {
    userEmail.style.border = "2px solid rgba(255, 0, 0, 0.6)";
  } else if (this.value.length >= 4) {
    userEmail.style.border = "1px solid #112d4e";
  }
});

// 도메인 선택 시 자동 입력
const domainSelect = document.querySelector("select");
domainSelect.addEventListener("change", (e) => {
  domain.value = e.target.value;
});

// 성별
let gender;
userGender.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    gender = e.target.value;
    console.log(gender);
  });
});

// 폼 제출 이벤트 리스너
form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(userName.value);
  console.log(userNum.value);
  console.log(userNum2.value);
  console.log(userId.value);
  console.log(userPwd.value);
  console.log(userPwd2.value);
  console.log(userEmail.value + "@" + domain.value);
  console.log(gender);
  console.log(userAdd.value);
  console.log(userAgree.value);

  const userInfo = getUserInfo(
    userName.value,
    userNum.value,
    userNum2.value,
    userId.value,
    userPwd.value,
    userEmail.value,
    domain.value,
    userAdd.value,
    gender,
    userAgree.checked
  );

  console.log(userInfo);

  modal.style.display = "flex";
});
