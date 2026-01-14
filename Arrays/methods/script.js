// Array: Collection of different types of datqa in a single variable.

// let marks=[34, 35, 45, 56, 8, 56, true, "a", null, undefined];
let marks=[34, 35, 45, 56, 80, 56, 23, 56];
// marks[0];
// console.log(marks[0]);

marks.length  //property of array

// Methods-----------------------------------------------------------------------//

// Push and Pop----------------- last ko element add or remmove//

// marks.push(1000);
// console.log(marks);

// marks.pop()
// console.log(marks.pop());

// shift and unsift--------------first ko element add or remove//

// marks.shift();
// marks.unshift(3,4,5,6);

//Splice------------------------------------------------//
// marks.splice(2,0,100,200); //(index, numbers to delete, values to add)

// Slice-----------------------------------------------//
// let newarr=marks.slice(1,4);

// indexOf---------------------------------------//
// marks.indexOf()
console.log(marks.indexOf(56,4));

// includes---------------------------------------//
marks.includes();   //returns boolean value
console.log(marks.includes(560));

// 