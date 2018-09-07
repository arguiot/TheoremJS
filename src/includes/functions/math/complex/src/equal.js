equal() {
	return this.eq(...arguments)
}
eq(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	return this.a.eq(complex.a) && this.b.eq(complex.b)
}
