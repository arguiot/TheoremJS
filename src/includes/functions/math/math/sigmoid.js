sigmoid(x, n = 15) {
	return new BigNumber(new BigNumber(1).div(this.e(n).pow(x).add(1)).toPrecision(n))
}
