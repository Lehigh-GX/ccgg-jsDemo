// JS promise
// call back function

//setTimeOut
var myTimeout = setTimeout(function () {
    console.log("after 2 second");

}, 2000)

clearTimeout(myTimeout);
console.log("after setTimeout");
setInterval(function () {
    console.log("every 2 seconds")
}, 2000)


for (var i = 1; i <= 5, i++) {
    setTimeout(handle(i), 0)
}

function handle(index) {
    return function () {
        console.log(index)
    }
}


// callback hill
setTimeout(function () {
    console.log("This is a callback function")
}, 100);
console.log("after callback function")
function task1() {
    console.log("Executive task1")
}
function task2() {
    console.log("Exectuive task2")
}
function task3() {
    console.log("Executive task3")
}
setTimeout(function () {
    task1();
    setTimeout(function () {
        task2();
        setTimeout(function () {
            task3();
        }, 1000)
    }, 700)
}, 500)
// call back hill
//

