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

	function logHypot(a, b) {
		a = new BigNumber(a).toNumber()
		b = new BigNumber(b).toNumber()

		const _a = Math.abs(a);
		const _b = Math.abs(b);

		if (a === 0) {
			return new BigNumber(Math.log(_b));
		}

		if (b === 0) {
			return new BigNumber(Math.log(_a));
		}

		if (_a < 3000 && _b < 3000) {
			return new BigNumber(Math.log(a * a + b * b) * 0.5);
		}

		/* I got 4 ideas to compute this property without overflow:
		 *
		 * Testing 1000000 times with random samples for a,b ∈ [1, 1000000000] against a big decimal library to get an error estimate
		 *
		 * 1. Only eliminate the square root: (OVERALL ERROR: 3.9122483030951116e-11)
		 Math.log(a * a + b * b) / 2
		 *
		 *
		 * 2. Try to use the non-overflowing pythagoras: (OVERALL ERROR: 8.889760039210159e-10)
		 var fn = function(a, b) {
		 a = Math.abs(a);
		 b = Math.abs(b);
		 var t = Math.min(a, b);
		 a = Math.max(a, b);
		 t = t / a;
		 return Math.log(a) + Math.log(1 + t * t) / 2;
		 };
		 * 3. Abuse the identity cos(atan(y/x) = x / sqrt(x^2+y^2): (OVERALL ERROR: 3.4780178737037204e-10)
		 Math.log(a / Math.cos(Math.atan2(b, a)))
		 * 4. Use 3. and apply log rules: (OVERALL ERROR: 1.2014087502620896e-9)
		 Math.log(a) - Math.log(Math.cos(Math.atan2(b, a)))
		 */

		return new BigNumber(Math.log(a / Math.cos(Math.atan2(b, a))))
	}

	let c;
	let d;

	if (complex.isComplex) {
    	c = complex.a;
    	d = complex.b;
	} else {
		c = complex;
		d = 0;
	}

	let a = this.a;
	let b = this.b;

	const arg = this.t.atan2(b, a);
	const loh = logHypot(a, b);

	a = this.t.exp(
		c.times(loh).minus(d.times(arg))
	)
	b = d.times(loh).plus(c.times(arg))

	this.a = a.times(this.t.cos(b))
	this.b = a.times(this.t.sin(b))

	return this
}
