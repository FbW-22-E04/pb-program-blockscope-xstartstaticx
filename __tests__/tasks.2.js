const rewire = require("rewire");
const solution = rewire("../index");

const determiner = solution.__get__("determiner");
const x = solution.__get__("x");

describe('Q2: check x are exist and have right value', () => {
    if (determiner >= 0) {
        test('x value should be "Greater or equal to 0"', () => {
            expect(x).toBe("Greater or equal to 0");
        })
    } else {
        test('x value should be "Less than 0"', () => {
            expect(x).toBe("Less than 0");
        })
    }
});