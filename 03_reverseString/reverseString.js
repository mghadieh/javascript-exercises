const reverseString = function (str) {
	let lengthOfString = str.length;
	let result = '';
	for (i = lengthOfString - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
};

/*
 * another simpler solution is: return string.split('').reverse().join('')
 */

// Do not edit below this line
module.exports = reverseString;
