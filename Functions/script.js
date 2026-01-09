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