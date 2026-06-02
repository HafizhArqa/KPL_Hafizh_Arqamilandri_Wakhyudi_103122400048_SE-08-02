import test from 'node:test';
import assert from 'node:assert';

test.describe("Truthy dan falsy", () => {
    test.it("Nilai kosong dan falsy", () =>{
        assert.ok(!"");
        assert.equal("",false);
    });
    test.it("Nilai ada adalah truthy", () =>{
        assert.ok("Hello, World!");
    });
});