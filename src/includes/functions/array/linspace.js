linspace(start, end, n) {
	const diff = end - start;
	const step = diff / n;
	return this.arange(start, end, step);
}
