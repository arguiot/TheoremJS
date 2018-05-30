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

	array.sort( (a, b) => a - b);
	if (array.length == 0) return 0

	const index = (array.length - 1) * n
	const floor = Math.floor(index)
	const diff = index - floor;
	if (array[index + 1] !== undefined) {
		const out = array[floor] + diff * (array[floor + 1] - array[floor])
		return new BigNumber(out)
	} else {
		return array[floor]
	}
}
