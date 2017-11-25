f(v, func) {
	return {
		type: "function"
		v: v,
		f: func,
		core: x => {
			let regex = new RegExp(v)
			let newStr = func.replace(regex, x)
			return eval(newStr)
		}
	}
}
