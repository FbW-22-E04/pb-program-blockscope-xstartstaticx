const rewire = require("rewire");
const solution = rewire("../index");

const determiner = solution.__get__("determiner");

describe('Q1: check determiner are exist and have right value', () => {
    test('determiner value should be greater than or equal -100', () => {
        expect(determiner).toBeGreaterThanOrEqual(-100);
    })
    test('determiner value should be less than or equal 100', () => {
        expect(determiner).toBeLessThanOrEqual(100);
    })
});