const sub = require('./sub')

test("sub 5 - 1 to be equal 4", ()=> {
    expect(sub(5,1)).toBe(4);
});