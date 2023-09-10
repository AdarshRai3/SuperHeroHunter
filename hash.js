const md5 = require('crypto-js/md5');
function generateHash(text) {
  return MD5(text).toString();
}
export { generateHash };
