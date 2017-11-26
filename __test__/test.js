const t = require(__testDir + "theorem.js")

eye.describe("Array", () => {
	eye.test("Flatten", "node",
		$ => $(t.flatten([[1,2],[3,4], 5])).Equal([1,2,3,4,5])
	)
	eye.test("Linspace", "node",
		$ => $(t.linspace(0, 100, 10)).Equal([ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ])
	)
	eye.test("Range & Arange", "node",
		$ => $(t.range(10)).Equal([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
	)
	eye.test("Reshape", "node",
		$ => $(t.reshape(t.range(10), 2)).Equal([ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ], [ 10 ] ])
	)
})

eye.describe("Math", () => {
	eye.describe("Algebra", () => {
		eye.test("Function", "node",
			$ => $(t.run(t.f("x", "2*x+1"), 2)).Equal(5)
		)
		eye.test("Find Roots & Polynomial", "node",
			$ => $(t.findRoots(t.polynomial(1, -1, -1))).Equal([ '(1 + Math.sqrt(5)) / 2', '(1 - Math.sqrt(5)) / 2' ])
		)
		eye.test("Numeral Solve & Graph", "node",
			$ => $(t.numeralSolve(t.f("x", "2*x+1"), 0)).Equal([ '-0.5', 0 ]) // Returns -0.5 with 0 error rate
		)
		eye.test("Y-Intercept", "node",
			$ => $(t.y_intercept(t.f("x", "2*x+1"))).Equal(1)
		)
	})
	eye.describe("Math Basic Functions", () => {
		eye.test("Factorial", "node",
			$ => $(t.factorial(5).toNumber()).Equal(120)
		)
		eye.test("Pow", "node",
			$ => $(t.pow(2, 8).toNumber()).Equal(256)
		)
		eye.test("Root", "node",
			$ => $(t.root(256, 8).toNumber()).Equal(2)
		)
		eye.test("Sqrt", "node",
			$ => $(t.sqrt(4).toNumber()).Equal(2)
		)
	})
	eye.describe("Numbers", () => {
		eye.test("Pi", "node",
			$ => $(t.pi().toNumber()).Equal(3.141592653589793)
		)
		eye.test("e", "node",
			$ => $(t.e().toNumber()).Equal(2.718281828459045)
		)
		eye.test("Golden Ratio", "node",
			$ => $(t.goldenRatio().toNumber()).Equal(1.618033988749895)
		)
	})
	eye.describe("Other", () => {
		eye.test("Apply", "node",
			$ => $(t.apply(2, x => 2*x)).Equal(4)
		)
		eye.test("Min, Max & Sort", "node",
			$ => $(t.min(1, 3, 2)).Equal(1),
			$ => $(t.max(1, 3, 2)).Equal(3),
			$ => $(t.sort(1, 3, 2)).Equal([ 1, 2, 3 ])
		)
		eye.test("Product", "node",
			$ => $(t.product(1, 3, 2).toNumber()).Equal(6)
		)
		eye.test("Sum", "node",
			$ => $(t.sum(1, 3, 3).toNumber()).Equal(7)
		)
	})
})
