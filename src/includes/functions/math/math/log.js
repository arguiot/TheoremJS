log(x, base, n = 15) {
	if (x.isComplex) {
		return x.log(base)
	}
	return new BigNumber(this.ln(x, n).div(this.ln(base, n)).toFixed(n - 1))
}
