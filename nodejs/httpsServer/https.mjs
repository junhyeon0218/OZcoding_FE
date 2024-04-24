// const request = require("./request");
// const response = require("./response");

// const { send } = require("./request");
// const { read } = require("./response");

import { send } from "./request";
import { read } from "./response";

function makeRequest(url, data) {
  // 요청 보내기
  // request.send(url, data);
  send(url, data);

  // 데이터를 return 하기
  // return response.read();
  return read();
}

const responseData = makeRequest("https://naver.com", "any data");

console.log(responseData);
