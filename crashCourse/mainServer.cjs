const http = require("http");
const fs = require("fs");
const url = require("url");

http
	.createServer((req, res) => {
		const queryUrl = url.parse(req.url, true);
		const fileName = "." + queryUrl.pathname;
		fs.readFile(fileName, function (err, data) {
			if (err) {
				res.writeHead(404, { "content-type": "text/html" });
				return res.end("<h1>Page Not Found </h1>");
			}
			res.writeHead(200, { "content-type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(8000, function () {
        console.log('server lisning on 8000')
    });
