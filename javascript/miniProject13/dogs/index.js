const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";

const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.querySelector("header");
const input = document.getElementById("search");
const button = document.getElementById("searchBtn");
const select = document.querySelector("select");
const main = document.querySelector("main");
const moreBtn = document.querySelector(".more");
const topBtn = document.querySelector(".top");
const resetBtn = document.getElementById("reset");

let currentDogs = [];

// 이미지 생성 함수
const makeImg = (element) => {
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("item");
  imgDiv.innerHTML = `
      <img src=${element}>`;
  main.appendChild(imgDiv);
};

// 처음 윈도우가 로드 되었을 때
const load = () => {
  // api랜덤 강아지에 get 요청을 보낸다
  getDogs();

  // 셀렉트에 견종 정보 뿌리기
  request2.open("get", apiAllBreeds);
  request2.addEventListener("load", () => {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach((key) => {
      const option = document.createElement("option");
      option.textContent = key;
      option.value = key;
      select.appendChild(option);
    });
  });
  request2.send();
};

// 필터링 기능
const filtered = (tag) => {
  main.innerHTML = "";
  let filteredDogs = currentDogs.filter(
    (item) =>
      // currentdogs에서 찾을 수 있는 이유는 img소스안에 견종을 나타내는 단어가 있기때문에 가능
      item.indexOf(tag.value) !== -1
  );
  filteredDogs.forEach((element) => {
    makeImg(element);
  });
};

// 멍멍이 가져오기
const getDogs = () => {
  request1.open("get", apiRandomDogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    // 중복 방지
    const newDogs = response.message.filter(
      (dog) => !currentDogs.includes(dog)
    );
    newDogs.forEach((element) => {
      currentDogs.push(element);
      makeImg(element);
    });
    console.log(currentDogs.length);
  });
  request1.send();
};

select.addEventListener("change", () => {
  filtered(select);
});
button.addEventListener("click", () => {
  filtered(input);
  input.value = "";
});
moreBtn.addEventListener("click", () => {
  getDogs();
  console.log(currentDogs.length);
});
topBtn.addEventListener("click", () => {
  // 주어진 위치로 스크롤 이동
  window.scrollTo({ top: 0 });
});
resetBtn.addEventListener("click", () => {
  // 메인 html 초기화
  main.innerHTML = "";
  // 멍멍이 배열 초기화
  currentDogs = [];
  getDogs();
});
window.addEventListener("load", load);
