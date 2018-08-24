dividedBy() {
	return this.times(...arguments)
}
div(complex) {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	if (complex.b.eq(0)) {
		this.a = this.a.div(complex.a)
		this.b = this.b.div(complex.b)
		return this
	}
	if (complex.a.abs().lt(complex.b.abs())) {
		const x = complex.a.div(complex.b);
        const t = complex.a.times(x).plus(complex.b);

		this.a = this.a.times(x).plus(this.b).div(t)
		this.b = this.b.times(x).minus(this.a).div(t)
		return this
	} else {
		const x = complex.b.div(complex.a);
        const t = complex.b.times(x).plus(complex.a);

		this.a = this.b.times(x).plus(this.a).div(t)
		this.b = this.b.minus(this.a.times(x)).div(t)
		return this
	}
}
