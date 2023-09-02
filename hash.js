const crypto = require("crypto-js");

function getMD5Hash(ts, privateKey, publicKey) {
  const hash = crypto.MD5(ts + privateKey + publicKey);
  return hash.toString();
}

console.log(getMD5Hash("1654237600", "63d44a2ff474121a6c8cce8ea9fc3cc05aac4c74", "801ffb179c43e62422d9c6ac3f1203f0"));
