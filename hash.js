var MD5 = require("crypto-js/md5");

// Set your public and private keys
var publicKey = "801ffb179c43e62422d9c6ac3f1203f0";
var privateKey = "63d44a2ff474121a6c8cce8ea9fc3cc05aac4c74";

// Generate a timestamp
var ts = new Date().getTime();

// Create a string to hash
var toHash = ts + privateKey + publicKey;

// Generate the hash
var hashVal = MD5(toHash).toString();

module.exports = { ts, publicKey, hashVal };
