log(base) {
	if (!base) {
		throw "[TheoremJS] Log: wrong base"
	}
	let a = this.a
	let b = this.b
	if (b.eq(0)) {
		this.a = this.t.log(a, base)

		return this
	}
	const asbs = a.times(a).plus(b.times(b))
	const log = this.t.ln(asbs)
	const half = log.div(2)

	a = this.arg()
	b = half
	const c = this.t.ln(base)
	const d = new BigNumber(0)

	const c2d2 = c.times(c).plus(d.times(d)) // c^2 + d^2

	const acbd = a.times(c).plus(b.times(d)) // a*c + b*d
	const bcad = b.times(c).minus(a.times(d)) // b*c - a*d

	const re = acbd.div(c2d2)
	const im = bcad.div(c2d2)

	this.a = im
	this.b = re

	return this
}
