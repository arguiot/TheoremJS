numeralSolve(f, end, from = -100, to = 100, step = 0.1) {
	let buffer = []
	let index = []
	for (let i = new BigNumber(from); i.lt(to); i = i.plus(step)) {
		buffer.push(this.run(f, i.toNumber()))
		index.push(i.toNumber())
	}
	function closest(num, arr) {
		let curr = arr[0];
		let diff = Math.abs(num - curr);
		for (let val = 0; val < arr.length; val++) {
			const newdiff = Math.abs(num - arr[val]);
			if (newdiff < diff) {
				diff = newdiff;
				curr = arr[val];
			}
		}
		return curr;
	}
	const close = closest(end, buffer.filter(x => !isNaN(x)))
	return index[buffer.indexOf(close)]
}
