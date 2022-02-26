require('events').defaultMaxListeners = 15;
const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const partnerRouter = require('./routes/partnerRouter');
const promotionRouter = require('./routes/promotionRouter');

const { loopback, port } = require('./network');
const { hostname } = loopback;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/campsites', campsiteRouter);
app.use('/partners', partnerRouter);
app.use('/promotions', promotionRouter);

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
