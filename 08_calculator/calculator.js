const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

// This function accepts an array called arr
/*
 * The solution branch uses arr.reduce((total, current)=> total + current, 0)
 * this is a recursive function where total will hold the total sum at each
 * element of the array, current will hold the value of the current value, and
 * 0 is the initial value
 */
const sum = function (arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
};

// This function accepts an array called arr
/*
 * The solution branch uses arr.reduce((total, current)=> total * current)
 * this is a recursive function where total will hold the total result of multiplications
 * at each element of the array, current will hold the value of the current value
 */
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
