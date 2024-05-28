function decrypt(data) {
  return "decrypted data";
}

function read() {
  return decrypt("data");
}

console.log("여긴 response 모듈");

module.exports = {
  read,
  decrypt,
};

// export { read };
