//javascript property attribute
var alice = {
    name: "alice",
    gendar: "male"
}
alice.age = 30;
console.log(Object.keys(alice));
alice.age = 40;
//___ptoto__ has three  enumberable and configureable writable 
Object.defineProperties(alice, {
    "salary": {
        writable: true,
        value: 1000
    }
});
console.log(Object.keys(alice));  // 
alice.salary = 2000;// have this value but not exit in alice!!!!
console.log(Object.keys(alice));
console.log(alice.salary);

// configurable is for keys;
// object three status; extensisble / sealed / frozen
var obj = {
    x: "abc"
}
console.log("extensible: ", Object.isExtensible(obj));
Object.preventExtensions(obj);// prototype cannot be inherted from prototype

console.log("seal: ", Object.isSealed(obj));
console.log("frozen: ", Object.isSealed(obj));
obj.y = 100;
console.log(obj.y);//undefined
object.seal(obj) // seal can not add or delete but can modify

 // freeze > seal
// Exactly what Object.seal does, plus:It prevents modifying any existing properties


//Event loop






