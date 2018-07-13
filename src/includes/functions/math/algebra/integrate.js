integrate(poly) {
	if (poly.type != 'polynomial') {
		throw "TheoremJS: Integrate: Not a polynomial"
	}
	let values = []
	for (let i in poly.values.reverse()) {
		values.push(poly.values[i] / (parseInt(i)+1))
	}
	values.reverse()
	values.push(0)
	const out = values.filter(a => !isNaN(a))

	return this.polynomial(...out)
}
