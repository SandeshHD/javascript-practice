let a = 10; // Number
console.log(typeof(a)) 
let b = 10.5; // Number
console.log(typeof(b)) 
console.log(typeof(NaN)) // Number

let c = "Hello"; // String
console.log(typeof(c))

let d = true // Boolean
console.log(typeof(d))

const person = {
    name:"Sandesh",
    age:20
} //Object
console.log(typeof(person))

const weekdays = ['monday','tuesday','wednesday','thursday','friday','saturday']  // Array Object
console.log(typeof(weekdays))

const date = new Date() //Date Object
console.log(typeof(date)) 

console.log(typeof(null)) // Object

console.log(10/+0) // Infinity
console.log(10/-0) // -Infinity

console.log(Number.MAX_SAFE_INTEGER+1===Number.MAX_SAFE_INTEGER+2) //true

var maxNum = BigInt(Number.MAX_SAFE_INTEGER)

console.log(maxNum+1n===maxNum+2n) //false