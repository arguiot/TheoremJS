abs() {
	return new BigNumber(this.a).times(this.a).plus(this.b.times(this.b)).sqrt() // sqrt(a^2 + b^2)
}
