const testCalculator = require('./calculator')

describe('testCalculator', () => {
    test("10 plus 2 is equal to 12", () => {
        expect(testCalculator.add()).toBe(12)
    })
    test("10 minus 2 is equal to 8", () => {
        expect(testCalculator.subtract()).toBe(8)
    })
    test("10 multiply by 2 is equal to 20", () => {
        expect(testCalculator.multiply()).toBe(20)
    })
    test("10 divide by 2 is equal 5", () => {
        expect(testCalculator.divide()).toBe(5)
    })

})