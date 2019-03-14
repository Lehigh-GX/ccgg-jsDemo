

//promise
function task1() {
    console.log("Executive task1")
}
function task2() {
    console.log("Exectuive task2")
}
function task3() {
    console.log("Executive task3")
}


function t1() {
    return new Promise(function (receive, reject) {
        setTimeout(function () {
            task1();
            resolve("Task1 is finished");
        }, 500)// if 500 is o then task2 first then task1
        task2();
    })
}

function t2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            task2();
            resolve("Task2 is finished")
        }, 1000)
    })
}

function t3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            task3();
            resolve("Task3 is finished")
        }, 1000)
    })
}

var promise = t1();
promise.then(function (resp) {
    console.log(resp);
    return t2();
}, function (error) {

}).then(function (resp) {
    console.log(resp);
    return t3();
}).then(function (resp) {
    console.log(resp);
}), function (error) {
    console.log("error", error)
}
