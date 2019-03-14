
function Person(name) {
    if (!(this instanceof Person)) {
        return new Person(name);
    }
    this.name = name;
}
console.log(Person("Bob"));//// Person { name: "Bob"}

var bob = {
    name: "Bob",
    hello: function (a, b) {
        return "Hello" + this.name;
    }
}
console.log(bob.hello());
var myHello = bob.hello;
console.log(myHello(1, 2));   // there is no name:"bob" inside this function

console.log(bob.hello());
// call apply bind
console.log(myHello.apply(bob, [1, 2]));// parametee is an array 
console.log(myHello.call(bob, 1, 2));// parameter is divided 
console.log(myHello.bind(bob)(1, 2));// bind us two curly braces 

// self invoke function
(function () {
    var order = {
        price: 100,
        calculate: function () {
            var that = this;
            return {
                name: "table",
                getTotalPrice: function (qty) {
                    return qty * that.price;  // why can not use this here:
                    // 
                }
            }
        },
        calculate2: function () {
            return {
                name: "table",
                getTotalPrice: function (qty) {
                    return qty * this.price;
                }
            }

        }
    }
    var calc = order.calculate();
    console.log(calc);
    console.log(calc.name);
    console.log(calc.getTotalPrice(1));///nan
    var calc2 = order.calculate2();
    console.log(calc2.getTotalPrice.call(order, 1));
})()

function checkout(price, qty, member) {
    var result = price * qty;
    switch (member) {
        case "VIP":
            result *= 0.7;
            break;
        case "Premium":
            result *= 0.8;
            break;
        default:
            break;
    }
    return result;
}

console.log(checkout(10, 5, "VIP"));
// open close princple : open for extension. close for modification

function checkout2(price, qty, type) {
    this[type] = this[type] || 1;
    return price * qty * this[type];
}
var member = {
    "VIP": 0.7,
    "Premium": 0.8,
    "Super Vip": 0.5
}
console.log(checkout2.call(member, 100, 5, "VIP"));
