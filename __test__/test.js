const t = require(__testDir + "theorem.js")

eye.describe("Array", () => {
    eye.test("Flatten", "node",
        $ => $(t.flatten([
            [1, 2],
            [3, 4], 5
        ])).Equal([1, 2, 3, 4, 5])
    )
    eye.test("Linspace", "node",
        $ => $(t.linspace(0, 100, 10)).Equal([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    )
    eye.test("Range & Arange", "node",
        $ => $(t.range(10)).Equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    )
    eye.test("Reshape", "node",
        $ => $(t.reshape(t.range(10), 2)).Equal([
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7],
            [8, 9],
            [10]
        ])
    )
})

eye.describe("Math", () => {
    eye.describe("Algebra", () => {
        eye.test("Function", "node",
            $ => $(t.run(t.f("x", "2*x+1"), 2)).Equal(5)
        )
        eye.test("Find Roots & Polynomial", "node",
            $ => $(t.findRoots(t.polynomial(1, -1, -1))).Equal(['(1 + Math.sqrt(5)) / 2', '(1 - Math.sqrt(5)) / 2']),
            $ => {
                const roots = t.findRoots(t.polynomial(-3, 0, 2, 0))
                return $(roots[1]).isCloseTo(Math.sqrt(2 / 3))
            },
			$ => $(t.polynomial(1, -1, -1).core(0)).Equal(-1)
        )
        eye.test("Numeral Solve & Graph", "node",
            $ => $(t.numeralSolve(t.f("x", "2*x+1"), 0)).Equal(['-0.5', 0]) // Returns -0.5 with 0 error rate
        )
        eye.test("Y-Intercept", "node",
            $ => $(t.y_intercept(t.f("x", "2*x+1"))).Equal(1)
        )
		eye.describe("Calculus", () => {
			eye.test("Derivative", "node",
				$ => $(t.derivate(t.polynomial(1, -1, -1)).values).Equal([2, -1]),
				$ => $(t.derivate(t.polynomial(5, 2, -1, 3)).values).Equal([15, 4, -1])
			)
			eye.test("Integral", "node",
				$ => $(t.integrate(t.polynomial(1, -1, -1)).values).Equal([0.3333333333333333,-0.5,-1,0]),
				$ => $(t.integrate(t.polynomial(1, -1, -1)).f).Equal("0 * x**0 + -1 * x**1 + -0.5 * x**2 + 0.3333333333333333 * x**3 ")
			)
		})
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
        eye.test("Sigmoid", "node",
            $ => $(t.y_intercept(t.f(x => t.sigmoid(x).toNumber()))).Equal(0.5)
        )
    })
    eye.describe("Numbers", () => {
        eye.test("Pi", "node",
            $ => $(t.pi().toNumber()).Equal(3.14159265358979)
        )
        eye.test("e", "node",
            $ => $(t.e().toNumber()).Equal(2.71828182845905)
        )
        eye.test("Golden Ratio", "node",
            $ => $(t.goldenRatio().toNumber()).Equal(1.61803398874989)
        )
        eye.test("Constants", "node",
            $ => $(t.c("pi")).Equal(t.pi()),
            $ => $(t.c("e")).Equal(t.e()),
            $ => $(t.c("goldenRatio")).Equal(t.goldenRatio())
        )
        eye.describe("Primes", () => {
            eye.test("isPrime", "node",
                $ => $(t.isPrime(31013)).Equal(true),
                $ => $(t.isPrime(1)).Equal(false),
                $ => $(t.isPrime(2)).Equal(true)
            )
        })
    })
    eye.describe("Other", () => {
        eye.test("Apply", "node",
            $ => $(t.apply(2, x => 2 * x)).Equal(4)
        )
        eye.test("Min, Max & Sort", "node",
            $ => $(t.min(1, 3, 2)).Equal(1),
            $ => $(t.max(1, 3, 2)).Equal(3),
            $ => $(t.sort(1, 3, 2)).Equal([1, 2, 3])
        )
        eye.test("Product", "node",
            $ => $(t.product(1, 3, 2).toNumber()).Equal(6)
        )
        eye.test("Sum", "node",
            $ => $(t.sum(1, 3, 3).toNumber()).Equal(7)
        )
    })
    eye.describe("Statisqtiques", () => {
        eye.test("Average", "node",
            $ => $(t.average(10, 20, 15).toNumber()).Equal(15)
        )
        eye.test("Median", "node",
            $ => $(t.median(10, 20, 15)).Equal(15)
        )
        eye.test("Correlation", "node",
            $ => $(t.correlation([3, 2, 4, 5, 6], [9, 7, 12, 15, 17])).isCloseTo(0.997054486, 5)
        )
        eye.test("Regression", "node",
            $ => $(t.regression({
                0: 2,
                2: 4,
                3: 5
            }, 2).values).Equal([ -1.973729821555837e-15, 1.000000000000006, 1.9999999999999984 ]),
			$ => $(t.regression({
				0: 2,
				1: 5,
				3: 11
			}, 1).values).Equal([3, 2])
        )
    })
    eye.describe("Trigonometry", () => {
        eye.describe("Basic", () => {
            eye.test("Sin", "node",
                $ => $(t.sin(0)).Equal(0),
                $ => $(t.sin(t.pi())).isCloseTo(0),
                $ => $(t.sin(60)).Equal(Math.sin(60))
            )
            eye.test("Cos", "node",
                $ => $(t.cos(0)).Equal(1),
                $ => $(t.cos(t.pi())).isCloseTo(-1),
                $ => $(t.cos(60)).Equal(Math.cos(60))
            )
            eye.test("Tan", "node",
                $ => $(t.tan(0)).Equal(0),
                $ => $(t.tan(t.pi())).isCloseTo(0),
                $ => $(t.tan(60)).Equal(Math.tan(60))
            )
        })
        eye.describe("Hyperbolic", () => {
            eye.test("Sinh", "node",
                $ => $(t.sinh(0)).Equal(0),
                $ => $(t.sinh(t.pi())).isCloseTo(Math.sinh(Math.PI))
            )
            eye.test("Cosh", "node",
                $ => $(t.cosh(0)).Equal(1),
                $ => $(t.cosh(t.pi())).isCloseTo(Math.cosh(Math.PI))
            )
            eye.test("Tanh", "node",
                $ => $(t.tanh(0)).Equal(0),
                $ => $(t.tanh(t.pi())).isCloseTo(Math.tanh(Math.PI))
            )
        })
        eye.describe("Arc", () => {
            eye.test("Asin", "node",
                $ => $(t.asin(0)).Equal(0),
                $ => $(t.asin(1)).isCloseTo(t.pi().div(2))
            )
            eye.test("Acos", "node",
                $ => $(t.acos(0)).Equal(Math.acos(0)),
                $ => $(t.acos(1)).isCloseTo(0)
            )
            eye.test("Atan", "node",
                $ => $(t.atan(0)).Equal(0),
                $ => $(t.atan(t.pi())).isCloseTo(Math.atan(Math.PI))
            )
        })
        eye.describe("Arc Hyperbolic", () => {
            eye.test("Asinh", "node",
                $ => $(t.asinh(0)).Equal(0),
                $ => $(t.asinh(1)).isCloseTo(Math.asinh(1))
            )
            eye.test("Acosh", "node",
                $ => $(t.acosh(10)).Equal(Math.acosh(10)),
                $ => $(t.acosh(1)).Equal(0)
            )
            eye.test("Atanh", "node",
                $ => $(t.atanh(0)).Equal(0),
                $ => $(t.atanh(0.5)).isCloseTo(Math.atanh(0.5))
            )
        })
        eye.test("Atan2", "node",
            $ => $(t.atan2(90, 15)).Equal(Math.atan2(90, 15))
        )
    })
    eye.describe("Other", () => {
        eye.test("Convert to base", "node",
            $ => $(t.convertToBase(2, 2)).Equal('10'),
            $ => $(t.convertToBase(400, 64)).Equal('6g')
        )
        eye.test("Deg & Rad convertions", "node",
            $ => $(t.deg2rad(180)).Equal(t.pi()),
            $ => $(t.rad2deg(t.pi()).toNumber()).Equal(180)
        )
        eye.test("Draw Circular Points", "node",
            $ => $(parseFloat(Object.keys(t.drawCircularPoints(3))[0])).Equal(-1),
            $ => $(parseFloat(Object.keys(t.drawCircularPoints(3))[1])).isCloseTo(0.5),
            $ => $(parseFloat(Object.keys(t.drawCircularPoints(3))[2])).isCloseTo(0.5),
        )
    })
})
