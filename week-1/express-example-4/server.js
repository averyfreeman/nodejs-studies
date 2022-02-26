require('events').defaultMaxListeners = 15;
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { loopback } = require('./network');
const { hostname } = loopback;

const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.all('/campsites', (req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
});

app.get('/campsites', (req, res) => {
	// default statusCode set in app.all();
	res.end('Will send all campsites to you');
});

app.post('/campsites', (req, res) => {
	res.end(
		`Will add the campsite: ${req.body.name} with description: ${req.body.description}`,
	);
});

app.put('/campsites', (req, res) => {
	res.statusCode = 403;
	res.end(`PUT operation not supported on ${path.dirname()}`);
});

app.delete('/campsites', (req, res) => {
	res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
	res.end(`Campsite requested: ${req.params.campsiteId}`);
});

app.post('/campsites/:campsiteId', (req, res) => {
	res.statuscode = 403;
	res.end(`POST operation not supported on ${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
	res.write(`
    Updating campsite: ${req.params.campsiteId}`);
	res.end(`
    Will update campsite: ${req.body.name}
    with description: ${req.body.description}   
  `);
});

app.delete('/campsites/:campsiteId', (req, res) => {
	res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>welcome to express.js</h1></body></html>');
});

app.listen(port, loopback, () => {
	console.log(`
  server listening on 
  http://${hostname}:${port}
	`);
});
