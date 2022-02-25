require('events').defaultMaxListeners = 15;
const dns = require('dns');
const server = require('express');
const hostname = dns.resolve4('localhost', () => {
	[
		{ address: '127.0.0.1', ttl: 60 },
		{ address: '192.168.1.235', ttl: 60 },
	];
});
const port = 3000;

const app = server();

app.use((req, res) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>This is an express server</h1></body></html>');
});

app.listen(port, hostname, () => {
	`server listening on http://${hostname}:${port}`;
});
