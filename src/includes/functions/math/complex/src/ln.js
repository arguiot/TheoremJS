ln() {
	const a = this.a
	const b = this.b

	const asbs = a.times(a).plus(b.times(b))
	const log = this.t.ln(asbs)
	const half = log.div(2)

	this.b = this.arg()
	this.a = half

	return this
}
