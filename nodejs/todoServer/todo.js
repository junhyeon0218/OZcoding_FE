// To Do List => 어떤 기능이 필요할지?
    // To Do (리소스)
        // CRUD
            // Create : 서버에 To do 추가 - POST
            // Read : 서버에서 To do 정보 가져오기 - GET
            // Update : 서버의 To do 정보 수정 - PUT
            // Delete : 서버의 To do 삭제 - DELETE
// POST, GET, PUT, PATCH, DELETE, OPTIONS

    // 화면 (클라이언트)
        // 정보에 맞게 화면 그리기
        // 화면 비우기

const input = document.querySelector('input')
const createButton = document.querySelector('button')
const ul = document.querySelector('ul')

// Create : 서버에 To do 추가 - POST
function createTodo () {
    const newTodo = input.value

    // 서버에 추가할 To Do 내용을 담아 POST 요청 보내기
    return fetch('http://localhost:3000', {
        method: "POST",
        body: newTodo
    })
        .then(res => res.text())
        .then(res => console.log(res))
}

createButton.onclick = () => {
    createTodo()
        .then(() => getTodo())
        .then((res) => {
            clearDisplay()
            renderDisplay(res)
        })
}

// Read : 서버에서 To do 정보 가져오기 - GET
function getTodo () {

    // 서버에서 To Do 정보를 받아오기 위해 GET 요청 보내기
    return fetch('http://localhost:3000')
        .then(res => res.json())
}

getTodo()
    .then((res) => renderDisplay(res))

// Update : 서버의 To do 정보 수정 - PUT
function updateTodo (id, newContent) {

    // 서버에 수정할 To Do의 id와 새 내용을 담아 PUT 요청 보내기
    return fetch('http://localhost:3000', {
        method: "PUT",
        body: JSON.stringify({id, newContent})
    })
        .then(res => res.text())
        .then(res => console.log(res))
}

// Delete : 서버의 To do 삭제 - DELETE
function deleteTodo (id) {

    // 서버에 삭제할 To Do id를 담아 DELETE 요청 보내기
    return fetch('http://localhost:3000', {
        method: 'DELETE',
        body: id
    })
        .then(res => res.text())
        .then(res => console.log(res))

}

// 정보에 맞게 화면 그리기
function renderDisplay (todos) {

    // 화면에 그릴 todos의 내용을 브라우저 콘솔에 표시
    console.log(todos)
    todos.forEach((el) => {
        // To do 내용 표시할 list 요소 만들기
        const li = document.createElement('li')
        li.textContent = el.content

        // To do 삭제 요청을 보낼 버튼 만들기
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'

        // 삭제 버튼을 클릭하면...
        deleteButton.onclick = () => {

            // 서버에 id를 담아 요청을 보내고
            deleteTodo(el.id)
            // 변경된 서버 데이터를 다시 받아온 후
            .then(() => getTodo())
            .then(res => {
                // 원래 화면을 비우고
                clearDisplay()
                // 다시 받아온 데이터로 화면을 그림
                renderDisplay(res)
            })
        }

        // To do 내용을 수정할 input과,
        const input = document.createElement('input')
        // 서버에 수정 요청을 보낼 버튼 만들기
        const updateButton = document.createElement('button')
        updateButton.textContent = '수정'

        // 수정 버튼을 클릭하면...
        updateButton.onclick = () => {

            // 서버에 수정할 To do의 id와 수정할 값을 담아 요청을 보내고
            updateTodo(el.id, input.value)
            // 변경된 서버 데이터를 다시 받아온 후
            .then(() => getTodo())
            .then(res => {
                // 원래 화면을 비우고
                clearDisplay()
                // 다시 받아온 데이터로 화면을 그림
                renderDisplay(res)
            })
        }

        // list 요소에는 수정 input, 수정 버튼, 삭제 버튼 넣어주기
        li.append(input, updateButton, deleteButton)

        // ul에는 ist 요소 넣어주기
        ul.append(li)
    })
}

// 화면 비우기
function clearDisplay () {
    // ul에 더 이상 자식 요소가 없을 때까지 자식 요소를 삭제
    while (ul.children.length) {
        ul.removeChild(ul.children[0])
    }
}