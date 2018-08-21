plus(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	this.a = this.a.plus(complex.a)
	this.b = this.b.plus(complex.b)
	return this
}
