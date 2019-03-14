//prototype
//inhertance between object.
var a = {
    x: 100
}
var b = {};
b.__proto__ = a; // 换成 prototype 就不行  function 用Prototype 新的object 用 __proto__
console.log(b.x);// 100

console.log(a.isPrototypeOf(b));// true

function Shape() {
    this.x = 0;
    this.y = 0;
}
Shape.moveStatic = function (x, y) {
    this.x = x;
    this.y = y
}
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;

}
var s = new Shape();
s.move(1, 2);
s.moveStatic(1, 2);// moveStatic is not a function



function Triangle() {
    Shape.call(this);// call.apply bind only use for function
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;//All objects (with the exception of objects created with Object.create(null)) will have a constructor property
//所以这句话是必须的  otherwise t is belong to Shape
var t = new Triangle();
t.move(1, 1);
t.moveStatic(1, 1);// not a function



function Point() { }
Point.prototype.move = function (x, y) {
    Shape.prototype.move.call(this, x, y)
}
var p = new Point();
p.move(1, 1)
console.log(p);
p.moveStatic(1, 1)


