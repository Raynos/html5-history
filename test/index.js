var test = require("tape")

var History = require("../index")

test("History is a function", function (assert) {
    assert.equal(typeof History, "object")
    assert.end()
})
