factorial(n) {
	let buffer = 1;
	for (var i = 0; i < n; i++) {
		buffer = new BigNumber(buffer).times(new BigNumber(i) + 1)
	}
	return buffer
}
