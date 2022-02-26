// outer scope where closure gets x, y for callback
export const rect = async (x, y, callback) => {
	if (x <= 0 || y <= 0) {
		await callback(
			new Error(
				`rectangle dimensions must be greater than zero.  Received: ${x}, ${y}`,
			),
		);
	} else {
		await setTimeout(async () => {
			await callback(null, {
				// notice closure:
				area: () => x * y,
				perimeter: () => 2 * (x + y),
			});
		}, 2000);
	}
};

// orig, reference for func obj closure:
// area = (x, y) => x * y;
// perimeter = (x, y) => 2 * (x + y);
