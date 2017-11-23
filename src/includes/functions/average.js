average(array) {
	const summed = this.sum(array);
	const average = this.math.div(summed, array.length);
	return average;
}
