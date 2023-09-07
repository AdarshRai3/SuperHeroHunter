var MD5 = require("crypto-js/md5");
function generateHash(text) {
  return MD5(text).toString();
}
module.exports = { generateHash };
