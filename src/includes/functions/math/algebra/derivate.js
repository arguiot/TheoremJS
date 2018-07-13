derivate(poly) {
	if (poly.type != 'polynomial') {
		throw "TheoremJS: Derivative: Not a polynomial"
	}
	let values = []
	const arr = poly.values.reverse()
	for (let i = 0; i < arr.length; i++) {
		values.push(i * arr[i])
	}
	values.reverse()
	values.pop()
	const out = values.filter(a => !isNaN(a))

	return this.polynomial(...out)
}
