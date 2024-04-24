// const request = require("./request");
// const response = require("./response");

module.exports = {
  request: require("./request"),
  response: require("./response"),

  // // 각각 함수마다 하기때문에 추천x
  // send: request.send,
  // read: response.read,
};
