// 세션스토리지에 저장할 배열
let list = [];

document.getElementById("add-btn").addEventListener("click", function (e) {
  const inputText = document.getElementById("todo-input").value;

  if (inputText === "") {
    alert("할 일을 입력하세요.");
  } else {
    // li 만들기
    const textBox = document.createElement("li");
    textBox.className = "todo";
    document.querySelector("#todo-list").appendChild(textBox);
    textBox.textContent = inputText;

    // 체크박스
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    textBox.appendChild(checkBox);

    // 로컬스토리지에 저장
    list.push(textBox.innerText);
    alert(list);
    sessionStorage.setItem("memo", list);

    // 삭제 버튼
    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "X";
    textBox.appendChild(deleteBtn);

    // 삭제 이벤트
    deleteBtn.addEventListener("click", (e) => {
      document.querySelector("#todo-list").removeChild(textBox);

      // 세션스토리지에서 삭제
      for (let i = 0; i < list.length; i++) {
        if (list[i] === textBox.innerText) {
          list.splice(i, 1);
          alert(list);
        }
      }
    });

    // 4. 입력창은 초기화되어야 합니다.
    document.getElementById("todo-input").value = "";
  }
});

// 키 가져오기
const key = sessionStorage.getItem("memo");

// 로컬스토리지 key를 빈배열에 push
list.push(...key.split(","));

if (document.querySelector("#todo-list") !== null) {
  for (let i = 0; i < list.length; i++) {
    let tooo = document.createElement("li");
    document.querySelector("#todo-list").appendChild(tooo);

    // 첫번째 li에는 첫번째 list를, ...
    document.querySelector("#todo-list").childNodes[i].innerText = list[i];
  }
}

// 심화1) 입력한 TO-DO가 Local Storage에 저장되어 새로 고침 후에도 유지되도록 해보세요.
// 심화2) 할 일 항목에 완료 표시를 할 수 있는 체크박스를 추가해 보세요.
// 심화3) TO-DO 리스트를 드래그 앤 드롭으로 정렬할 수 있는 방법을 검색하고 적용해 보세요.
