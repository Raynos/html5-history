var test = require("tape")

var html5History = require("../index")

test("html5History is a function", function (assert) {
    assert.equal(typeof html5History, "function")
    assert.end()
})
