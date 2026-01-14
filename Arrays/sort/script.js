// Array Sort-------------------------------------------//
// let numbers=[1,2,3,4,5]

// numbers.reverse();
// console.log(numbers.reverse());

// let numbers=[10,33,2,4,5];
// // numbers.sort();
// // console.log(numbers.sort());

// let names=["arjun","sivam","bibek"];
// names.sort();
// // for sorting numbers using callback function
// numbers.sort((a,b)=>{
//     return b-a;
// });

// Array Iteration--------------------------------------//

 // Traversing array items, elements

// for(i=0;i<numbers.length;i++){
//     console.log(numbers[i]*2);
// }

// for in gives index of array
// for (const index in numbers) {
//     console.log(numbers[index]);
// }
// // for of dives direct value of the array
// for (const value of numbers) {
//     console.log(value);
// }


// Array Iteration Methods----------------------------------//

// forEach doesnot return value it only accesses the value 
// and displays it.-----------------------------------------//
// let numbers=[10,33,2,4,5,6,8,9];
// numbers.forEach(function(value,index,array){
//     console.log(value,index,array);
// });

// Map (returns value)----------------------------------------------------------//
// let result=numbers.map((value, index)=>{
//     if(value%2==0){
//     return value *2;
//     }
// });

// filter(returns new arrar)--------------------------------------------------------------//
// let result = numbers.filter((value)=>{
//     return value % 2 == 0; 
// });
// console.log(result);

// Reduce------------------------------------------------------------//
// console.log(numbers);
// let sum=numbers.reduce(function(prevValue,currentValue){
//     return prevValue+currentValue;
// },0);
// console.log(sum);

// Find------------------------------------------------------------//
// let result=numbers.find((value)=>{
//     return value % 2 ==0;
// });
// console.log(result);

// Every--------------------------------------------------------//
// let numbers=[50,20,30,40];
// let result=numbers.every((value)=>{
//     return value > 10;
// })
// console.log(result);

// Some--------------------------------------------------------//
// let numbers=[50,20,30,40];
// let result=numbers.some((value)=>{
//     return value > 10;
// })
// console.log(result);

// spread operator for copying array---------------------------//
// let numbers=[5,2,3,4];
// let users=["a","b"]
// let newarr=[...numbers,...users,100,200,..."hello"];

// Destructuring Array---------------------------------------------//
// let numbers=[5,2,3,4];
// // let num1=numbers[1];
// // let num2=numbers[2];
// let [num1,num2, ,num3] =numbers;

let numbers=[1,2,3,4,5,6,7,8,9,10]
// numbers.forEach((value)=>{
//     console.log(value*2);
// })

let even=numbers.filter((value=>{
    return value%2==0;
}))