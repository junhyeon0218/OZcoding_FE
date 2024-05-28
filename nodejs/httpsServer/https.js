// const request = require("./request");
// const response = require("./response");

// 모듈 캐싱 실험
// const { send } = require("./lib/request");
// const { read } = require("./lib/response");
// const { decrypt } = require("./lib/response");

// ES6
// import { send } form "./request";
// import { read } form "./response";

const lib = require("./lib");

function makeRequest(url, data) {
  // 요청 보내기
  // request.send(url, data);
  // send(url, data);
  lib.request.send(url, data);

  // 데이터를 return 하기
  // return response.read();
  // return read();
  return lib.response.read();
}

const responseData = makeRequest("https://naver.com", "any data");

console.log(responseData);
