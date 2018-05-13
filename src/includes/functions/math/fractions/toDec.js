toDec() {
	const args = [...arguments]
	if (args.length != 2) {
		throw "Require 2 numbers"
	}
	return new BigNumber(args[0]).div(args[1])
}
