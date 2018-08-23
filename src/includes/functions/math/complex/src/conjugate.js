conjugate() {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	this.b = this.b.negated()
	return this
}
