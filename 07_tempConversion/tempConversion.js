const ftoc = function (temp) {
	let result = (temp - 32) * (5 / 9);
	if (result - Math.floor(result) != 0)
		result = Number.parseFloat(result.toFixed(1));

	return result;
};

const ctof = function (temp) {
	let result = (temp * 9) / 5 + 32;

	if (result - Math.floor(result) != 0)
		result = Number.parseFloat(result.toFixed(1));

	return result;
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
