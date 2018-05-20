primePi(n) {
	n = new BigNumber(n).toNumber()
	if (n < 2) {
		throw "[TheoremJS] Number should be greater or equal to 2"
	}
	if (n > Number.MAX_SAFE_INTEGER) {
		throw `[TheoremJS] Input was larger than ${Number.MAX_SAFE_INTEGER}`
	}
	const gen = this.sieve()
	let out = 0
	for (var i = 0; i < n; i = gen.next().value) {
		out += 1
	}
	return new BigNumber(out - 1)
}
