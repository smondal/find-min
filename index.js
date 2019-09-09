/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
Array.prototype.flat = function () {
	return [].concat(...this);
};

module.exports = (...obj) => {
	let min;
	if (obj.flat().length === 0) {
		return min;
	}

	if (Array.isArray(...obj)) {
		min = Math.min.apply(null, ...obj);
	}	else if (typeof obj === 'object' && Object.keys(...obj).length >= 1) {
		min = Object.keys(...obj).reduce((a, b) => obj[a] > obj[b] ? b : a);
	}	else {
		min = Math.min(...obj);
	}

	return min;
};
