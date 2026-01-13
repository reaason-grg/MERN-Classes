// function sayHello(){
//     // code
// }
// sayHello= function name

// Function Declaration and Definition-----------------/
// function sayHello(){
//     console.log('Hello');
// }
// sayHello()

// Function Expression-------------------------------/

// let sayHello=function(){
//     console.log("Hello");
// }
// sayHello();

// Fat arrow function--------------------------//
// let sayHello =() => {
//     console.log("Hello");
// }
// sayHello()

// varianble name ==parameter
function sayHello(name){
    console.log("Hello"+ name)
}
sayHello("Rojen") //("Roojen")<---argunemt
sayHello("Sumit")
sayHello("Binita")

// function add(a,b){
//     sum=a+b;
//     console.log(sum);
// }
// add(1,2)
// add(2,2)
// add(3,2)

// const add=(a=0,b=0)=>{
//     console.log(a+b);
// }

// add()

// Rest parameter-------------------///
const add=(a,b,...numbers)=>{
    console.log(a,b,numbers)
}
add(1,2,3,4,5,67,7)

// Return---------------------------//
const sub=(a,b)=>{
    return a-b;
}
let result=sub(7,3);
console.log(result);

// First class function--------------//
// Functions treated as a value
//

function abc(num){
    num();
}
abc(function(){
    console.log("hello")
})


function xyz(){
    return function(){
        console.log("thank you")
    };
}
xyz()()

// Higher order function---------------------------//
// function as a parameter and return function


// closures: function that return another function and that returnrd function can access the value of the parent funuction---------------------------------------------------------------------------//

// function abc(){
//     let val=45;
//     return function(){
//         console.log(val);
//     }
// }
// abc()()

function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
let add1=counter();
console.log(add1());
console.log(add1());
console.log(add1());
console.log(add1());


// Pure and Impure functions--------------------------------//

// pure function changes the value of outside
// let num=45;
// // function abc(){
// //     console.log("hi");
// // }
// // abc();


// // impure function cghanges the outsides value
// function xyz(){
//     return ++num;
// }
// xyz();

// IIFE(Immediatels Invoked Function Expression)---------------------//
(function abc(){
    console.log("Hello, how are you?")
})();

