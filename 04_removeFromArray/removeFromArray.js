const removeFromArray = function (arr) {
	let originalArray = arguments[0];
	let numOfArg = arguments.length;
	let result = [];
	for (let i = 1; i < numOfArg; i++) {
		if (originalArray.indexOf(arguments[i]) != -1) {
			originalArray.splice(originalArray.indexOf(arguments[i]), 1);
		}
		result = originalArray;
	}
	return result;
};

/* solution used array.forEach((item)=> .... ) to do what I did. */
// Do not edit below this line
module.exports = removeFromArray;
