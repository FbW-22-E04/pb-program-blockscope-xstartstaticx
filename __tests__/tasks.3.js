const rewire = require("rewire");
const solution = rewire("../index");

const determiner = solution.__get__("determiner");
const updater = solution.__get__("updater");
describe('Q3: check updater and message are exist and have right value', () => {
    console.log = jest.fn();
    const solution = require('../index');
    if (determiner >= 0) {
        test('updater value should be "Greater or equal to 0"', () => {
            expect(updater).toBe("Greater or equal to 0");
        })
        test('message value should be "Positive integer"', () => {
            const message = console.log.mock.calls.find(call => call.join(' ').substring(0, 8) === 'message:');
            expect(message.join(' ').toLowerCase()).toContain("positive integer");
        })
    } else {
        test('updater value should be "Less than 0"', () => {
            const updaterMessage = console.log.mock.calls.find(call => call.join(' ').substring(0, 8) === 'updater:');
            expect(updaterMessage.join(' ').toLowerCase()).toContain("less than 0");
        })
    }
});