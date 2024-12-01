import url from "url"

const urlString = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'

// url constructor
const urlObj = new URL(urlString)
console.log(urlObj)

// format URL object to a string
console.log(url.format(urlObj))

// import.meta.url ====> return the current file url 
console.log(import.meta.url)

// fileUrlToPath 
console.log(url.fileURLToPath(import.meta.url))


// URLSeatchParams class
console.log(urlObj.search)
const params = new URLSearchParams(urlObj.search)
console.log(params.get('query'))
params.append('limit' , 4)
console.log(params)
params.delete('limit')
console.log(params)