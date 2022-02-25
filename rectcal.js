// examples:
const MathAddl = require('./functions/area.js'); // whatever name you choose for variable becomes object
const { perimeter } = require('./functions/perimeter.js'); // or just destructure while loading

const { area } = MathAddl; // destructure the usual way afterwards
// since example calls functions from inside object, I re-created it es6-style:
const rect = {
	area,
	perimeter,
};

function solveRect(l, w) {
	console.log(`solving for rectangle with dimensions ${l}, ${w}`);

	if (l <= 0 || w <= 0) {
		console.log(
			`rectangle dimensions must be greater than zero.  Received: ${l}, ${w}`,
		);
	} else {
		console.log(`area of rectangle: ${rect.area(l, w)}`);
		console.log(`perimeter of rectangle: ${rect.perimeter(l, w)}`);
	}
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
