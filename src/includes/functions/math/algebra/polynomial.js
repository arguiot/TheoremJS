polynomial() {
	const args = [...arguments].reverse()
	let buffer = "";
	for (let i = 0; i < args.length; i++) {
		buffer += `${args[i]} * x**${i} ${i == args.length -1 ? '': '+ '}`
	}
	return {
		type: "polynomial",
		v: "x",
		f: buffer,
		values: [...arguments],
		core: x => {
			let regex = new RegExp("x")
			let newStr = buffer.replace(regex, `(${x})`)
			return eval(newStr).toPrecision(14)
		}
	}
}
