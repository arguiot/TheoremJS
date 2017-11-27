median() {
	let array = [...arguments]
	array.sort( (a, b) => new BigNumber(a).sub(b) );
	const half = Math.floor(new BigNumber(array.length).div(2).toNumber());
	if(array.length % 2) {
		return array[half]
	}
	else {
		return new BigNumber(array[half-1]).add(array[half]).div(2).toNumber()
	}
}
