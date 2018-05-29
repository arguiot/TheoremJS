q1() {
	let array = [...arguments]
	array.sort( (a, b) => new BigNumber(a).sub(b) );
	const half = Math.floor(new BigNumber(array.length).div(4).toNumber());
	if(array.length % 2 == 0) {
		return new BigNumber(array[half])
	}
	else {
		return new BigNumber(array[half]).add(array[half + 1]).div(2)
	}
}
