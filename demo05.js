function Vehicle() {
    this.price = 1000;
}// global price 1000
var v = new Vehicle(); ///price 1000
console.log(v);
console.log("after new ", global.price);/// undefined

function Vehicle() {
    price = 1000;
}// global price 1000
var v = new Vehicle(); ///price 1000
console.log(v);
console.log("after new ", global.price);/// 1000 

function Vehicle() {
    var price = 1000;
}// global price 1000
var v = new Vehicle(); ///price 1000
console.log(v);
console.log("after new ", global.price);/// undefined; 

// no global have globalThis === window;
function Vehicle() {
    this.price = 1000;
}// global price 1000
var v = new Vehicle(); ///price 1000
console.log(v);
console.log("after new ", global.price);/// undefined
var u = Vehicle();
console.log(u);
console.log("after function invoke ", global.price);// 1000  不用 new 就是 global 所以是1000
//global 在程序里 再浏览器里面是window
// var define only in function 
// this only effect when the function invoked


// Constructor:
function Person() {
    if (!(this instanceof Person)) {
        return new Person(name);
    }
    this.name = name;
}
console.log(Person("Bob"));//// Person { name: "Bob"}

var Bob = {
    name: "Bob",
    hello: function (a, b) {
        return "Hello" + this.name;
    }
}
console.log(bob.hello());
var myHello = bob.hello;
console.log(myHello(1, 2));



