reshape(array, part) {
	const tmp = [];
	for (let i = 0; i < array.length; i += part) {
		tmp.push(array.slice(i, i + part));
	}
	return tmp;
}
