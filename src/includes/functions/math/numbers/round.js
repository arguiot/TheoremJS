round(n, precision = 0) {
	const tenPow = this.pow(10, precision)
	return new BigNumber(n).times(tenPow).integerValue(BigNumber.ROUND_HALF_CEIL).div(tenPow)
}
