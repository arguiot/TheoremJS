multipliedBy() {
	return this.times(...arguments)
}
times(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	this.a = this.a.times(complex.a)
	this.b = this.b.times(complex.b)
	return this
}
