const palindromes = function (str) {
	str = str
		.toLowerCase()
		.replace(/[^\w\s]|_/g, '')
		.replace(/\s+/g, '');
	let i = 0;
	let j = str.length - 1;
	while (true) {
		if (i >= j) break;
		if (str[i] === str[j]) {
			i++;
			j--;
			continue;
		}
		return false;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
