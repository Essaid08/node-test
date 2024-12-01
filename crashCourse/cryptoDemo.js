import crypto from "crypto"


// create hashes 
const hash = crypto.createHash('sha256') ;
hash.update('pasword123')
console.log(hash.digest("hex"))

// randomebytes()
crypto.randomBytes(16 ,(err , buffer) => {
    if (err) throw err
    console.log(buffer.toString('hex'))
})