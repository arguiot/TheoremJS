dividedBy() {
	return this.times(...arguments)
}
div(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	
	const a = this.a
	const b = this.b
	const c = complex.a
	const d = complex.b

	const c2d2 = c.times(c).plus(d.times(d)) // c^2 + d^2

	const acbd = a.times(c).plus(b.times(d)) // a*c + b*d
	const bcad = b.times(c).minus(a.times(d)) // b*c - a*d

	const re = acbd.div(c2d2)
	const im = bcad.div(c2d2)

	this.a = re
	this.b = im

	return this
}
