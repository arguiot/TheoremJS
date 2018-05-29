sigmoid(x, n = 15) {
	return new BigNumber(new BigNumber(1).div(this.pow(this.c("e", n), x).plus(1)).toFixed(n))
}
