product() {
	return [...arguments].reduce((a, b) => new BigNumber(a).times(b))
}
