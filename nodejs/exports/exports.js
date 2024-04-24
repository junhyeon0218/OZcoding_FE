module.exports.A = 1;

module.exports.funA = function funA() {};
exports.funA = function funA() {};

// 한 파일에 하나만 exports하는 경우
module.exports = function funB() {};

// 가장 좋은 방법 // 어떤 것들이 exports되는지 알 수 있다.
module.exports = {
  funA,
};
