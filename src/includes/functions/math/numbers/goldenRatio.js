goldenRatio(n = 15) {
	return new BigNumber(new BigNumber(1).plus(this.sqrt(5)).div(2).toPrecision(n))
}
