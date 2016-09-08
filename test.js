var query = require("./index")
query("http://a.com?b=1", "b", function(b) {
    console.log(
        b === "1" ? "[pass]" : "[fail]",
        '("http://a.com?b=1", "b", callback)', "=>", 'callback("1")'
    )
})
query("http://a.com?b=1", "a", function(a) {
    console.log(
        a === "" ? "[pass]" : "[fail]",
        '("http://a.com?b=1", "a", callback)', "=>", 'callback("")'
    )
})
query("http://a.com?a=a&b=1", "a", function(a) {
    console.log(
        a === "a" ? "[pass]" : "[fail]",
        '("http://a.com?a=a&b=1", "a", callback)', "=>", 'callback("a")'
    )
})
query("http://a.com?a=a&b=1#hash&1", "b", function(b) {
    console.log(
        b === "1" ? "[pass]" : "[fail]",
        '("http://a.com?a=a&b=1#hash&1", "b", callback)', "=>", 'callback("1")'
    )
})
query("http://a.com?a=a&b=1#http://a.com?b=b1", "b", function(b) {
    console.log(
        b === "1" ? "[pass]" : "[fail]",
        '("http://a.com?a=a&b=1#http://a.com?b=b1", "b", callback)', "=>", 'callback("1")'
    )
})

