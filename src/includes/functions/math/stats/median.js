median() {
	let array = [...arguments]
	if (typeof array[0] == 'object') {
		array = array[0]
	}
	array.sort( (a, b) => new BigNumber(a).minus(b) );
	if (array.length == 0) return 0

	const half = this.floor(array.length / 2).toNumber()

	if (array.length % 2 == 0) {
		return new BigNumber(array[half])
	} else {
		return new BigNumber(array[half - 1]).plus(array[half]).div(2)
	}
}
