average() {
	const summed = this.sum(...arguments);
	const average = new BigNumber(summed).div(arguments.length);
	return average.toString()
}
