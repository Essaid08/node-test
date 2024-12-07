const url = require('url') ;

const adr = 'https://localhost:8080/default.html?year=2024&month=february';

const queryObj = url.parse(adr , true)

console.log(queryObj.host)
console.log(queryObj.pathname)
console.log(queryObj.search)
console.log(queryObj.protocol)

const data = queryObj.query 

console.log(data.year)
console.log(data.month)