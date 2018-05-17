isPrime(n) {
	n = new BigNumber(n).abs()
	const leastFactor = this.leastFactor(n)
	if (n.eq(leastFactor) && n.gte(2)) {
		return true
	}
	return false
}
