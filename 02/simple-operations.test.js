const nodeTest = require('node:test');
const assert = require('node:assert/strict');
const Operations = require('./operations');
const operations = new Operations();
nodeTest.describe("Test Operations",async(t)=>{

await nodeTest.it("Shout make addition Operation",()=>{
    const result = operations.add(3,2);
    assert.strictEqual(result,5);
})
await nodeTest.it("Test multiply",()=>{
    const result = operations.multiply(2,5);
    assert.strictEqual(result,10);
})

await t.test("Test divide",async(test)=>{
    const result = operations.multiply(0,5);
    assert.strictEqual(result,0);
    await test.test("Divide should going fine",()=>{
        assert.strictEqual(operations.divide(5,5),1)
    })
})

})