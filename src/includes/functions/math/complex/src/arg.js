arg() {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	return new BigNumber(this.t.atan2(this.a, this.b))
}
