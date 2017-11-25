max() {
	const sorted = this.sort(...arguments);
	return sorted[sorted.length - 1]
}
