const reverseString = function (str) {
	let lengthOfString = str.length;
	let result = '';
	for (i = lengthOfString - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
};

// Do not edit below this line
module.exports = reverseString;
