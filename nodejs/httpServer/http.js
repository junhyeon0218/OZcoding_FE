// http 내장 모듈 가져오기
const http = require("http");

// 3000 포트 이용
const port = 3000;

// 모듈을 사용해 http 서버를 만들기
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>hello, world!</h1>");
});

// 서버는 지정된 포트 3000에서 수신 대기하게 설정
// 서버가 준비되면 수신 콜백 함수가 호출
server.listen(port, () => {
  console.log(`서버가 포트넘버 ${port}에서 작동중입니다.`);
});
