arange(start, end, step, offset) {
	const len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
	const direction = start < end ? 1 : -1;
	const startingPoint = start - (direction * (offset || 0));
	const stepSize = direction * (step || 1);

	return Array(len).fill(0).map((_, index) => startingPoint + (stepSize * index));
}
range(n) {
	return this.arange(0, n, 1);
}
