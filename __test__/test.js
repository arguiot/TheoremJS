// const t = require(__testDir + "theorem.js")

eye.describe("Array", () => {
	eye.test("Flatten",
		$ => $(t.flatten([[1,2],[3,4], 5])).Equal([1,2,3,4,5])
	)
	eye.test("Linspace",
		$ => $(t.linspace(0, 100, 10)).Equal([ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ])
	)
	eye.test("Range & Arange",
		$ => $(t.range(10)).Equal([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
	)
	eye.test("Reshape",
		$ => $(t.reshape(t.range(10), 2)).Equal([ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ], [ 10 ] ])
	)
})

eye.describe("Math", () => {
	eye.describe("Algebra", () => {
		eye.test("Function",
			$ => $(t.run(t.f("x", "2*x+1"), 2)).Equal(5)
		)
	})
})
