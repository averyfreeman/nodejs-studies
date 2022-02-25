const process = require('process');
const dblFn = require('./double.js');

// fixed
// const result = dblFn.double(7);

// command line arguments
let input;
input = process.argv[2];

const result = dblFn.double(input);

console.log(`
	process.argv: ${process.argv[2]} 
	doubled result: ${result}
	typeof result:  ${typeof result}
`);
