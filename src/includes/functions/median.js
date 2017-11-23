median(array) {
	array.sort( (a, b) => this.math.sub(a, b) );
	const half = Math.floor(this.math.div(array.length,2));
	if(array.length % 2) {
		return array[half];
	}
	else {
		return this.math.div(this.math.add(array[half-1], array[half]), 2.0);
	}
}
