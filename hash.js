const crypto = require("crypto-js");

function getMD5Hash(text) {
  const hash = crypto.MD5(text);
  return hash.toString();
}

console.log(getMD5Hash("text to hash"));
