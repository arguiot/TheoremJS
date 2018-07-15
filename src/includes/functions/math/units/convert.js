convert(value, type, a, b) {
	class Units {
		//= units
	}
	const u = new Units()
	return u[type](value, a, b)
}
