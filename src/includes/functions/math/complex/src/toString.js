toString() {
	return `${this.a.toString()} ${this.b.lt(0) ? "-" : "+"} ${this.b.abs().toString()}i`
}
