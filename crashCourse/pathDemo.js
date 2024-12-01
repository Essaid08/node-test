import path from 'path'
import url from "url"

const filePath = './user/said/resume.txt'

// basename() =====> file-name
console.log(path.basename(filePath))

// folder name
console.log(path.dirname(filePath))

// extensien name 
console.log(path.extname(filePath))

// return an object of all properties 
console.log(path.parse(filePath)
)

// __dirname and __filename in EJS
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename , __dirname)

// join()
const filePath2 = path.join(__dirname , 'dir5' , 'textTest.txt')
console.log(filePath2)

// resolve()
const filePath3 = path.resolve(__dirname , 'dir5' , 'textTest.txt')
console.log(filePath3)