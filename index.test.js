const { brackets } = require("./index");

describe("brackets test", () => {
    test("tests", () => {
        expect(brackets('{ [] ( ) }')).toBe(1);
        expect(brackets('{ [(] ) }')).toBe(0);
        expect(brackets('{ [ }')).toBe(0);
        expect(brackets('] }')).toBe(0);
        expect(brackets('')).toBe(0);
    })
})