function printHelloWorld(){
    console.log("Hello world")
}

printHelloWorld();

function printSomething(a){
    console.log(a)
}

printSomething("I'm a parameter")

function sumOfArray(...args){
    let sum = 0;
    args.forEach(element => {
        sum += element
    });
    return sum;
}

console.log(sumOfArray(1,2,3,4,5))


const sum = function(a,b){ //Anonymous function.
    return a+b;
} 
sum.num = 10
console.log(sum(10,20))
const sum2 = sum // Reference

sum2.num = 5

console.log(sum2.num)

const sumb = function sumy(a,b){ //Anonymous function.
    return a+b;
} 
// sumy(10,20) //Error - Not defined

const printName = (name) => { // arrow function
    console.log(`My name is ${name}`) // String interpolation
}

const printName2 = name => console.log(`My name is ${name}`) 



printName("Sandesh H D");
printName2("Sandesh H D");

// IIFE - Immediately Invoked Function Expression 
(function(){
    console.log("Called Automatically")
})();

!function(){
    console.log("This also Called Automatically")
}();


// Callback

function cbExample(val1,val2,callback){
    return callback(val1,val2)
}

console.log(cbExample(10,20,sum))