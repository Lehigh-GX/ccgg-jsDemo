var assert = require("assert");
console.log(typeof "abc" === "string");///ture
var myboolean = true;
console.log(typeof myboolean);// boolean
console.log(typeof typeof myboolean);// string
console.log(typeof undefined); //"undefined"
console.log(typeof []); // obejct 
// typeof return a string
console.log(typeof function () { });// "function"
var test = function () {
    console.log("test");
};
function testWrap() {
    if (typeof x === "function") {
        x();
    }
}
testWrap(test);

var myobj = {};
myobj.name = "Bob";
var myobj1 = new Object();
var x = Obejct(100);    // {Number: 100}
assert.equal(x, 100);
assert.ok((x === 100));// error

var y = { name: "Bob" };
var z = Object(y); // y  = {name: "bob"} bushi {{name: "bob"}}

function isObject(obj) {
    return obj === Object(obj);
}

Object(null); // {}
Object(2); /// {Number: 2}











