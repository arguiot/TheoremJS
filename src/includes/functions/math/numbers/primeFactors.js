primeFactors(n) {
	n = new BigNumber(n).toNumber()
	if (n < 2) {
		throw "[TheoremJS] Number should be greater or equal to 2"
	}
	if (n > Number.MAX_SAFE_INTEGER) {
		throw `[TheoremJS] Input was larger than ${Number.MAX_SAFE_INTEGER}`
	}
	let list = []
	for (var i = 2; i <= n; i++) {
		if (n % i == 0) {
			if (this.isPrime(i)) {
				n /= i
				list.push(new BigNumber(i))
				i = i - 1 // check for number twice (example 100 = 2*2*5*5)
			}
		}
	}
	return list
}
