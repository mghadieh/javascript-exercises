const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

// This function accepts an array called arr
const sum = function (arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
};

// This function accepts an array called arr
const multiply = function (arr) {
	let result = 1;
	for (let i = 0; i < arr.length; i++) {
		result *= arr[i];
	}
	return result;
};

const power = function (a, b) {
	return Math.pow(a, b);
};

const factorial = function (num) {
	let result = 1;
	if (num === 0) return result;
	if (num < 0) return 'ERROR';

	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
