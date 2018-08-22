dividedBy() {
	return this.times(...arguments)
}
div(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	this.a = this.a.div(complex.a)
	this.b = this.b.div(complex.b)
	return this
}
