sum() {
	return [...arguments].reduce((a, b) => new BigNumber(a).plus(b))
}
