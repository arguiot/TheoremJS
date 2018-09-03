rad2deg(x) {
	return new BigNumber(x).times(180).div(this.pi)
}
