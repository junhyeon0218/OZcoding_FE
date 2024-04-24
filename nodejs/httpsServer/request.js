function encrypt(data) {
  return "encrypted data";
}

// 어디로(url) 어떤 데이터(data)를 보낼건지
function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`${encryptedData} is being sent to ${url}`);
}

module.exports = {
  send,
};
