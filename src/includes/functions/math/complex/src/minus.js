plus(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	this.a = this.a.minus(complex.a)
	this.b = this.b.minus(complex.b)
	return this
}
