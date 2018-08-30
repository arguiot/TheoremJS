exp() {
	const a = this.a
	const b = this.b

	const ea = this.t.exp(a)
	const cos = this.t.cos(b)
	const sin = this.t.sin(b)

	const re = ea.times(cos)
	const im = ea.times(sin)

	this.a = re
	this.b = im

	return this
}
