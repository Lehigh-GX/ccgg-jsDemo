var assert = require("assert");
var alice = {
    name: "alice",
    age: 123,
    hello: function () {
        return "hello" + this.name;
    }
}
var keys = Object.keys(alice);
console.log(keys);// Object.keys return array with object's property inside
keys.forEach(function (key, index) {
    console.log(key);
    if (typeof alice[key] === "function") {
        console.log(alice[key]());
    } else {
        console.log(alice[key]);
    }
});  /// hello hello alice

var props = Object.getOwnPropertyNames(alice);
console.log(props);
var arr = [1, "a", 3, { "name": "bob" }, 5];

console.log(Object.keys(arr));//(5) ["0", "1", "2", "3", "4"]
console.log(Object.getOwnPropertyNames(arr));//(6) ["0", "1", "2", "3", "4", "length"]
// keys return enumerable property 
// getOwnPropertyNames return all property


var bob = {
    _name: "bob",
    get name() {
        return this._name;
    },
    set name(str) {
        this._name = str;

    }
}
console.log(bob._name); // bob
bob.name = "steve";
console.log(bob.name); // steve
console.log(bob._name); // steve
// accesser and mutator

