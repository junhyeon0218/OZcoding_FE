// node.js에 내장된 http 모둘 불러오기
const http = require('http')

// To do 데이터를 관리할 배열 생성
let todos = []

// http 요청을 처리하고 응답을 보내줄 서버 생성
const server = http.createServer((req, res) => {
    // 요청이 들어오면 요청의 http 메서드 종류 서버 터미널에 표시
    console.log(req.method + ' 요청이 들어왔어요!')

    // CORS 설정을 위한 헤더 작성해주기 -> Origin 주소는 클라이언트 주소에 맞춰주세요!!
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')

    // CORS Preflight 요청 처리
    if (req.method === "OPTIONS") {
        res.end('요청을 보내시오')
    }

    // POST 요청 - To do 생성 요청이 들어오면,
    if (req.method === 'POST') {
        let data
        // 데이터가 들어오기 시작하면 받기
        req.on('data', (chunk) => {
            data = chunk.toString()
        })
        // 데이터가 모두 들어오고 나면,
        req.on('end', () => {
            // To do 배열에 추가해주기
            todos.push({ id: Number(new Date()), content: data})
            // To do 정보가 잘 변경 됐는지 서버 터미널에서 한 번 표시
            console.log(todos)
            // 변경이 잘 되었다고 Text로 응답
            res.end('Todo가 추가되었어요!')
        })
    }

    // GET 요청 - To do 정보 요청이 들어오면,
    if (req.method === 'GET') {
        // todos 배열을 JSON 형식의 문자열로 바꿔서 응답해주기
        res.end(JSON.stringify(todos))
    }

    // DELETE 요청 - To do 삭제 요청이 들어오면,
    if (req.method === "DELETE") {
        let data
        // 데이터가 들어오기 시작하면 받기
        req.on('data', (chunk) => {
            data = chunk.toString()
        })
        // 데이터가 모두 들어오고 나면,
        req.on('end', () => {
            // 삭제할 id와 일치하는 요소만 없애기
            todos = todos.filter(el => el.id !== Number(data))
            // 잘 삭제 됐는지 서버 터미널에서 한 번 표시
            console.log(todos)
            // 삭제가 잘 되었다고 Text로 응답
            res.end('Todo가 삭제됐어요!')
        })
    }

    // PUT 요청 - To do 수정 요청이 들어오면,
    if (req.method === "PUT") {
        let data
        // 데이터가 들어오기 시작하면 받기
        req.on('data', (chunk) => {
            data = chunk.toString()
        })
        // 데이터가 모두 들어오고 나면,
        req.on('end', () => {
            // 수정할 요소의 id와 내용을 받아오고,
            const {id, newContent} = JSON.parse(data)
            // todos에서 id가 일치하는 요소만 변경해주기
            todos = todos.map(el => {
                if (el.id === id) {
                    return {id, content: newContent}
                } else {
                    return el
                }
            })
            // 잘 수정 됐는지 서버 터미널에서 한 번 표시
            console.log(todos)
            // 수정이 잘 되었다고 Text로 응답
            res.end('Todo가 수정됐어요!')
        })
    }
})
// 이러면 서버 만들기 완성!

// 위에서 만든 서버가 몇 번 포트를 감시할 건지 지정해서 서버 열어주기
server.listen(3000, () => {
    // 서버가 열리면 서버 터미널에 log 찍어주기
    console.log('서버가 열렸어요!')
})