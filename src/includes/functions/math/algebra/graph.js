graph(f, from=-100, to=100, step=0.1) {
	let array = {}
	for (var i = new BigNumber(from); i.lessThanOrEqualTo(new BigNumber(to)); i = i.plus(new BigNumber(step))) {
		array[i.toString()] = f.core(i).toPrecision(15)
	}
	return array
}
