zeta(x, n = 15) {
	let buffer = 0
	for (var i = 1; i < n * 10; i++) {
		buffer = new BigNumber(buffer).plus(new BigNumber(x).pow(-i))
	}
	return new BigNumber(buffer.toPrecision(n))
}
