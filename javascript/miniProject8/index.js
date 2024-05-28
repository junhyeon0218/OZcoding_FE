const form = document.querySelector("form");
const name1 = document.querySelector("#name");
const email2 = document.querySelector("#email2");
const pw = document.querySelector("#pw");
const radios = document.querySelectorAll("[name=states");
const ages = document.querySelector("#age");

let domain = "";
let states = "";
let age = "";

radios.forEach((radio) => {
  // radio버튼 중에 하나가 바뀌게 되면
  radio.addEventListener("change", (e) => {
    // event발생 -> 현재 checked가 된 값을
    states = e.target.value;
  });
});

ages.addEventListener("change", (e) => {
  age = e.target.value;
});

email2.addEventListener("change", (e) => {
  domain = e.target.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 동작인 페이지 새로고침을 막음

  console.log(name1.value);
  console.log(email.value + "@" + domain);
  console.log(states);
  console.log(age);
});
