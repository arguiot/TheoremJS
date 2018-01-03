round(n, precision = 2) {
	n = Number(n)
	return Math.round(n * 10 ** precision) / 10 ** precision
}
