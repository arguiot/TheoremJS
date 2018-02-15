gradient(p1, p2) {
	const x1 = Number(Object.keys(p1)[0])
	const y1 = Number(Object.values(p1)[0])
	const x2 = Number(Object.keys(p2)[0])
	const y2 = Number(Object.values(p2)[0])

	const slope = (y2 - y1) / (x2 - x1)
	
	return slope
}
