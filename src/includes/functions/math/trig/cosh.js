cosh(x) {
	const e = this.e()
	return e.pow(x).minus(e.pow(-x)).div(2)
}
