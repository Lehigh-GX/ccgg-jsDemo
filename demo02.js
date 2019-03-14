// JS data types
var assert = require('assert');

// Datatypes: boolean, string, number, undefined, null, Symbol
console.log(typeof "abc" === "string");
var myBoolean = true;
console.log(typeof typeof myBoolean);
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"

var test = function() {
	console.log("test");
};
function testWrap(x) {
	if(typeof x === "function"){
		x();
	}
}

testWrap(test);

var myobj = {};
myobj.name = "Bob";
console.log(myobj);
var myobj1 = new Object();

var x = Object(100); //{age: 100}
assert.equal(x, 100);
assert.ok(!(x === 100));

var y = {name: "bob"};
var z = Object(y);
console.log(y == z);
console.log(y === z);

function isObject(obj) {
	console.log(Object(obj));
	return obj === Object(obj);
}
console.log(isObject(123));