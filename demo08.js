// closure
function outer() {
    var m = 10;
    return function (x) {
        return x * m;
    }
}

var inner = outer();
console.log(inner());

function getCounter() {
    var count = 0;
    function x() {

    }
    return {
        getCount: function () {
            return count;
        },
        setCount: function (c) {
            count = c;
        },
        increase: function () {
            count++;
        },
        xxxxx: x
    };

}
var myCounter = getCounter();
console.log(myCounter.getCount());
myCounter.setCount(1);
console.log(myCounter.getCount());

var myCounter1 = (function () {
    var count = 0;
    return {
        getCount: function () {
            return count;
        },
        setCount: function (c) {
            count = c
        },
        increase: function () {
            count++
        }
    }
})();
// this
function Myclass() {
    this.x = 100;
    var y = "abc";
    var getX = function () {
        console.log(this.x)// undefined there is no x in MyClass; this.x belong to window
        console.log(y)// abc
    }
    getX();
    this.getY = function () {
        console.log(this.x);//100 beacuse this is belong to window the same for this.x =100  
        console.log(y)//abc
    }
}
var myClass = new Myclass;
myClass.getY();

//Javascript Singleton  确保是单例 有的话的就返回, 不然就创建一个 保证只有一个
var MySingle = (function () {
    var instance;
    return {
        getInstance: function () {
            if (!instance) {
                instance = new Object();

            }
            return instance;
        }
    }
})()
var ms1 = MySingle.getInstance();
var ms2 = MySingle.getInstance();
console.log(ms1 === ms2)/// ture 



