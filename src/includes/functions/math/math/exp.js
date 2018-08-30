exp(n) {
	if (n.isComplex) {
		return n.exp()
	}
	return new BigNumber(Math.exp(new BigNumber(n).toNumber()))
}
