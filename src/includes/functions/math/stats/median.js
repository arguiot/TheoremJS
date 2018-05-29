median() {
	let array = [...arguments]
	if (typeof array[0] == 'object') {
		array = array[0]
	}
	array.sort( (a, b) => new BigNumber(a).minus(b).toNumber());
	if (array.length == 0) return 0

	const half = Math.floor(array.length / 2)

	if (array.length % 2) {
		return new BigNumber(array[half])
	} else {
		return new BigNumber((array[half - 1] + array[half]) / 2)
	}
}
