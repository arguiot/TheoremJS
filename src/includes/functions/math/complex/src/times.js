multipliedBy() {
	return this.times(...arguments)
}
times(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	const a = this.a
	const b = this.b
	this.a = a.times(complex.a).minus(b.times(complex.b))
	this.b = a
				.plus(b)
				.times(complex.a.plus(complex.b))
				.minus(a.times(complex.a))
				.minus(b.times(complex.b)) // 	(a+b)(c+d)-ac-bd.
	return this
}
