const crypto = require('crypto');

function getDateTime() {
    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + 
                + (currentdate.getMonth()+1)  + 
                + currentdate.getFullYear() +  
                + currentdate.getHours() + 
                + currentdate.getMinutes() + 
                + currentdate.getSeconds();
    return datetime;
}
let ts = getDateTime();
let public_key = "801ffb179c43e62422d9c6ac3f1203f0";
let private_key = "63d44a2ff474121a6c8cce8ea9fc3cc05aac4c74";



function createHash(ts, public_key, private_key) {
    const hash = crypto.createHash('md5');
    hash.update(ts + private_key + public_key);
    return hash.digest('hex');
}



let hash_value = createHash(ts, public_key, private_key);
