// 로또 생성기

// 이번주 당첨 번호를 받는다.

// 로또 번호 자동 생성기를 만든다. - 5회

// 로또 번호를 넣을 빈 배열 만들기
// 버튼을 누를 때 랜덤 번호 생성
// 5회 생성하기에서 당첨번호와 같은 번호는 강조

// 선택자

// 버튼
const winBtn = document.querySelector(".winBtn");
const randomBtn = document.querySelector(".randomBtn");

const winDiv = document.querySelector(".winDiv");
const randomDiv = document.querySelector(".randomDiv");

// 랜덤 번호 6자리 리스트 생성 함수
const makeNum = (div) => {
  const lottoNumList = [];
  if (div === winDiv) {
    div.innerHTML = "";
  }
  while (lottoNumList.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (lottoNumList.indexOf(num) === -1) {
      lottoNumList.push(num);
    }
  }
  return lottoNumList.sort((a, b) => a - b);
};

// 랜덤 번호 6자리 공 생성 함수
const makeBalls = (div) => {
  const numBox = document.createElement("div");
  numBox.className = "numBox";
  const lottoNumList = makeNum(div);
  console.log(lottoNumList);
  lottoNumList.forEach((e) => {
    const ball = document.createElement("span");
    ball.textContent = e;
    numBox.appendChild(ball);
  });
  div.appendChild(numBox);
};

// 숫자 일치 여부 확인 함수
const check = () => {
  // 당첨번호 배열
  const winNums = Array.from(winDiv.querySelectorAll("span")).map((span) =>
    parseInt(span.textContent)
  );
  // 자동 생성 번호 배열
  const randomNums = Array.from(randomDiv.querySelectorAll("span")).map(
    (span) => parseInt(span.textContent)
  );

  // 일치하는 숫자를 담을 배열
  const matchedNums = [];

  // 당첨번호와 자동 생성 번호 비교
  for (let i = 0; i < winNums.length; i++) {
    for (let j = 0; j < randomNums.length; j++) {
      if (winNums[i] === randomNums[j]) {
        matchedNums.push(randomNums[j]);
      }
    }
  }

  // 일치하는 숫자 배경색 변경
  const randomNumSpans = randomDiv.querySelectorAll("span");
  randomNumSpans.forEach((span) => {
    const num = parseInt(span.textContent);
    if (matchedNums.includes(num)) {
      span.style.backgroundColor = "yellow"; // 원하는 색상으로 변경 가능
    } else {
      span.style.backgroundColor = ""; // 기본 배경색으로 복귀
    }
  });
};

// winBtn 클릭 시 이벤트 처리
winBtn.addEventListener("click", () => {
  makeBalls(winDiv);
  check(); // 당첨번호와 자동 생성 번호 비교
});

// randomBtn 클릭 시 이벤트 처리
randomBtn.addEventListener("click", () => {
  if (randomDiv.innerHTML !== "") {
    randomDiv.innerHTML = ""; // 이전 자동 생성 번호 초기화
  }
  for (let i = 0; i < 5; i++) {
    makeBalls(randomDiv);
  }
  check(); // 당첨번호와 자동 생성 번호 비교
});
