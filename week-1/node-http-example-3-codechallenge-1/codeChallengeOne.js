'use strict';
const http = require('http');
('use strict');
const hostname = 'localhost';
const port = 8080;
const { locations } = require('./locations');
const generateMessage = require('./generate');
// console.log(generateMessage(locations));
//create a server object:
const server = http
	.createServer(function (req, res) {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/html');
		res.write(`    <http>
    <body>
    <h3>${generateMessage(locations)}</h3>
    `); //write a response to the client
		res.end(`
    <h3><a href=http://nucamp.co/enroll>Click here to enroll</a></h3>
    </body>
    </http>,
    `); //end the response
	})
	.listen(port, hostname, () =>
		console.log(`server running at http://${hostname}:${port}`),
	); //the server object listens on port 8080

// this is a fork from https://codesandbox.io/s/xvw8orl17q
