nPrime(n) {
	n = new BigNumber(n).toNumber()
	if (n < 1) {
		throw "[TheoremJS]: n is less than 1"
	}
	if (n > Number.MAX_SAFE_INTEGER) {
		throw `[TheoremJS] Input was larger than ${Number.MAX_SAFE_INTEGER}`
	}
	const gen = this.sieve()
	let out = 0
	for (var i = 0; i < n; i++) {
		out = gen.next().value
	}
	return new BigNumber(out)
}
