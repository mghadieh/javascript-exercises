const fibonacci = function (num) {
	let result = 1;
	let pre = 1;
	let current = 1;
	num = parseInt(num);
	if (num <= 0) return 'OOPS';
	for (let i = 2; i < num; i++) {
		result = pre + current;
		pre = current;
		current = result;
	}
	return result;
};

// Do not edit below this line
module.exports = fibonacci;
