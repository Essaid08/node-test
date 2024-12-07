const http = require("http");
const url = require("url");
const fs = require("fs");
const dt = require("./date.cjs");

http
	.createServer((req, res) => {
		fs.readFile("../public/about.html", (err, data) => {
			res.writeHead(200, { "content-type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080, () => {
		console.log("Server3 is running on port 8080");
	});

fs.open("newFsFile.txt", "w", (err, file) => {
	if (err) throw err;
	console.log("saved");
});

fs.writeFile("newFsFile2.txt", "Hello Content", function (err) {
	if (err) throw err;
	console.log("Saved 2 !");
});

var fileName2 = "newFsFile.txt";

fs.unlink(fileName2, function (err) {
	if (err) throw err;
	console.log(`${fileName2} Deleted succefuly`);
});

fs.rename('newFsFile2.txt' , 'myFile2.txt' , (err) => {
    if(err) throw err
    console.log('File renamed !')
})
