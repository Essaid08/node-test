import os, { userInfo } from "os"

// user infos
console.log(os.userInfo())
console.log(userInfo().username)

// total memory 
console.log(os.totalmem())

// free memory 
console.log(os.freemem())

// CPU infos 
console.log(os.cpus())