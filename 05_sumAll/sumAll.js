const sumAll = function (low, high) {
	if (low < 0 || high < 0) return 'ERROR';
	if (typeof low != 'number' || typeof high != 'number') return 'ERROR';
	if (low > high) {
		let temp = low;
		low = high;
		high = temp;
	}
	let result = 0;
	for (let i = low; i <= high; i++) {
		result += i;
	}
	return result;
};

// Do not edit below this line
module.exports = sumAll;
