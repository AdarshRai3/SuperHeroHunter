const crypto = require('crypto');

function getDateTime() {
    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + 
                + currentdate.getMonth()+ 
                + currentdate.getFullYear() +  
                + currentdate.getHours() + 
                + currentdate.getMinutes() + 
                + currentdate.getSeconds();
    return datetime;
}
let ts = getDateTime();
let publicKey = "801ffb179c43e62422d9c6ac3f1203f0";
let private_key = "63d44a2ff474121a6c8cce8ea9fc3cc05aac4c74";



function createHash(ts, publickey, private_key) {
    const hash = crypto.createHash('md5');
    hash.update(ts + private_key + publickey);
    return hash.digest('hex');
}



let hash_Val = createHash(ts, publickey, private_key);

let hashVal=hash_Val;
