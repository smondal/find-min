/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
const flatten = function (arr) {
	return arr.reduce((flat, toFlatten) => {
		return flat.concat(
			Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
		);
	}, []);
};

module.exports = (...obj) => {
	let min;
	if (flatten(obj).length === 0) {
		return min;
	}

	if (Array.isArray(...obj)) {
		const flattenarr = flatten(...obj);
		min = Math.min.apply(null, flattenarr);
	} else if (typeof obj === 'object' && Object.keys(...obj).length >= 1) {
		min = Object.keys(...obj).reduce((a, b) => (obj[a] > obj[b] ? b : a));
	} else {
		min = Math.min(...obj);
	}

	return min;
};
