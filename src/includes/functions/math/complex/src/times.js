multipliedBy() {
	return this.times(...arguments)
}
times(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	this.a = this.a.times(complex.a).minus(this.b.times(complex.b))
	this.b = this.a
				.plus(this.b)
				.times(complex.a.plus(complex.b))
				.minus(this.a.times(complex.a))
				.minus(this.b.times(complex.b)) // 	(a+b)(c+d)-ac-bd.
	return this
}
