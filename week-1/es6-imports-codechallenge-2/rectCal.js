import { rect } from './functions/rect.mjs';
const solveRect = async (l, w) => {
	console.log(`solving for rectangle with dimensions ${l}, ${w}`);
	rect(l, w, (err, rectangle) => {
		if (err) {
			console.log('ERROR: ', err.message);
		} else {
			console.log(
				`area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`,
			);
			console.log(
				`perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`,
			);
		}
	});
	await console.log(
		`This statement is logged after the call to rect()`,
	);
};

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
