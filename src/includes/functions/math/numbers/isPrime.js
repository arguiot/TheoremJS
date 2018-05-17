isPrime(n) {
	n = new BigNumber(n).abs()
	const leastFactor = this.leastFactor(n)
	if (n.eq(leastFactor)) {
		return true
	}
	return false
}
