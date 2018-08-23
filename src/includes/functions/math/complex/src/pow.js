pow(complex) {
	/* I couldn't find a good formula, so here is a derivation and optimization
	 *
	 * z_1^z_2 = (a + bi)^(c + di)
	 *         = exp((c + di) * log(a + bi)
	 *         = pow(a^2 + b^2, (c + di) / 2) * exp(i(c + di)atan2(b, a))
	 * =>...
	 * Re = (pow(a^2 + b^2, c / 2) * exp(-d * atan2(b, a))) * cos(d * log(a^2 + b^2) / 2 + c * atan2(b, a))
	 * Im = (pow(a^2 + b^2, c / 2) * exp(-d * atan2(b, a))) * sin(d * log(a^2 + b^2) / 2 + c * atan2(b, a))
	 *
	 * =>...
	 * Re = exp(c * log(sqrt(a^2 + b^2)) - d * atan2(b, a)) * cos(d * log(sqrt(a^2 + b^2)) + c * atan2(b, a))
	 * Im = exp(c * log(sqrt(a^2 + b^2)) - d * atan2(b, a)) * sin(d * log(sqrt(a^2 + b^2)) + c * atan2(b, a))
	 *
	 * =>
	 * Re = exp(c * logsq2 - d * arg(z_1)) * cos(d * logsq2 + c * arg(z_1))
	 * Im = exp(c * logsq2 - d * arg(z_1)) * sin(d * logsq2 + c * arg(z_1))
	 *
	 */
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	const arg = this.arg(this.a, this.b)
	const aS = new BigNumber(this.t.pow(this.a, 2))
	const bS = new BigNumber(this.t.pow(this.b, 2))
	const logsq2 = this.t.sqrt(aS.plus(bS))

	const exp = this.t.exp(
		logsq2
		.times(complex.a)
		.minus(
			arg.times(complex.b)
		))
	const trig = logsq2
	.times(complex.b)
	.plus(
		arg.times(complex.a)
	)

	const re = exp.times(this.t.cos(trig))
	const im = exp.times(this.t.sin(trig))
	
	this.a = re
	this.b = im
	return this
}
