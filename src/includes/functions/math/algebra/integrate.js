integrate(poly) {
	if (poly.type != 'polynomial') {
		throw "TheoremJS: Integrate: Not a polynomial"
		return 0;
	}
	let values = []
	for (let i in poly.values.reverse()) {
		values.push(poly.values[i] / (parseInt(i)+1))
	}
	values.reverse()
	return this.polynomial(...values, 0)
}
