toDec() {
	const args = [...arguments]
	if (typeof args[0] == 'object') {
		if (args[0].length != 2) {
			throw "Require 2 numbers"
		}
		return new BigNumber(args[0][0]).div(args[0][1])
	}
	if (args.length != 2) {
		throw "Require 2 numbers"
	}
	return new BigNumber(args[0]).div(args[1])
}
