// 세션스토리지에 저장할 배열
let list = JSON.parse(sessionStorage.getItem("list")) || [];

const todoList = document.getElementById("todo-list");

// 세션 스토리지 저장 함수
const saveSession = () => {
  const saveList = JSON.stringify(list);
  sessionStorage.setItem("list", saveList);
};

// 삭제 함수
function delLi() {
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList.add("delete-btn");
  return delBtn;
}

// 리스트 만들기 함수
function makeList(inputValue) {
  if (inputValue === "") {
    alert("할 일을 입력하세요.");
  } else {
    // todo li 생성
    const textLi = document.createElement("li");
    textLi.classList.add("todo");
    textLi.textContent = inputValue;

    // list에 삽입
    list.unshift(inputValue); // 배열 앞에 추가
    console.log(list);

    // 삭제 버튼 함수
    const delBtn = delLi();
    delBtn.addEventListener("click", () => {
      document.querySelector("#todo-list").removeChild(textLi);
      const index = list.indexOf(inputValue); // 삭제할 요소의 인덱스 찾기
      if (index !== -1) {
        list.splice(index, 1); // 배열에서 해당 인덱스의 요소 제거
        console.log(list); // 수정된 배열 확인
      }
      const updatedList = JSON.stringify(list);
      sessionStorage.setItem("list", updatedList);
    });

    todoList.appendChild(textLi);
    textLi.appendChild(delBtn);

    textLi.style.backgroundColor = "white";

    textLi.addEventListener("click", (e) => {
      if (textLi.style.backgroundColor === "white") {
        textLi.style.backgroundColor = "rgb(230, 230, 230)";
      } else {
        textLi.style.backgroundColor = "white";
      }
    });

    // 세션스토리지 저장
    saveSession();
    // 입력창 초기화
    document.getElementById("todo-input").value = "";
  }
}

// 세션에 저장된 내용 불러오기
function pageLoad() {
  // 객체 리스트를 배열로 변환 후 리버스 (역순으로 나오게 하기)
  const valueList = Object.values(list).reverse();

  // 만약 세션에 내용이 있다면
  if (valueList.length > 0) {
    // 벨류 값으로 makeList함수 실행
    valueList.forEach((e) => {
      // 기존 세션에 makeList에 있는 세션까지 더해져서 오류생김
      makeList(e);
    });

    // 그렇다면 기존 불려온 세션을 지우고 새로운 벨류값들을 받아서 동일 세션키에 붙여넣기
    const jsonValueList = JSON.stringify(valueList.reverse());
    sessionStorage.setItem("list", jsonValueList);
    console.log(valueList);

    // 그럼에도 생긴 오류
    // 기존 리스트에는 1, 2, 3, 4, 5 값이 배열로 들어가 있었다.
    // 하지만 pageLoad 중에 makeList를 하면서 기존 리스트에 추가적으로 1, 2, 3, 4, 5가
    // 한번씩 더 들어갔다. 그래서 새로고침 후에 todo를 추가해주면 [추가한 todo, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    // 이런식으로 나왔다. -> makeList 안에 리스트를 valueList와 동일하게 할 필요가 있음

    // 리스트를 valueList로 초기화
    // makeList 상에서는 list가 바뀌지 않았으므로 콘솔에는 어지럽게 나오지만
    // 마지막에 바뀌니 작동은 한다.
    list = valueList;

    // 아쉬운 점:
    // 강의 영상에서는 todo목록(li)이 추가될 때 마다 list 전체를 갈아끼워버리는 방식이었다.
    // li를 추가할 때 마다 index단위로 추가하는게 편해보여서 그렇게 했지만
    // 세션에 저장하는 과정에서 어려움이 있었다. 세션에 저장하기에는 list전체를 갈아끼우는 방식으로 한다면
    // 더 편할지도..
    // 추가적으로 todo를 배열이 아닌 객체로 받았다면 완료 상태값도 같이 받을 수 있었지만, 배열로 해서 귀찮아졌다.

    // 시도해볼 것

    // 정상 작동
  }
}

pageLoad();

document.getElementById("add-btn").addEventListener("click", () => {
  const inputText = document.getElementById("todo-input").value;
  makeList(inputText);
});
