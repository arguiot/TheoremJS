quantile() {
	let array = [...arguments]
	let n = array[0]
	array.shift()
	if (typeof array[0] == 'object') {
		array = array[0]
	}
	if (n > 1 || n < 0) {
		throw "[TheoremJS] n should be a Float between 0 and 1"
	}

	array.sort( (a, b) => new BigNumber(a).minus(b).toNumber());
	if (array.length == 0) return 0

	const half = new BigNumber(array.length).times(n).toNumber() - 1

	if (half === Math.floor( half )) {
		return new BigNumber((array[half] + array[half + 1]) / 2)
	} else {
		return new BigNumber(array[Math.ceil(half)])
	}
}
