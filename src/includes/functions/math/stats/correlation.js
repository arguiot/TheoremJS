correlation(array1, array2) {
    if (array1.length != array2.length) {
        throw "[TheoremJS]: Correlation error, arrays are not the same size"
    }
    const average1 = this.average(...array1).toNumber()
    const average2 = this.average(...array2).toNumber()
    let up = 0;
	let down1 = 0;
	let down2 = 0;
    for (var i = 0; i < array1.length; i++) {
        up += (array1[i] - average1)*(array2[i] - average2)
		down1 += Math.pow(array1[i] - average1, 2)
		down2 += Math.pow(array2[i] - average2, 2)
    }
	const result = up / Math.sqrt(down1 * down2)
	return new BigNumber(result)
}
