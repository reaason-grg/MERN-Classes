// Loops
console.log("Hello World");
// for, while, do while
// for loop is used when we know start and end point and way to reach
// While loop is used when we know start and way to reach but don't know endpoint

//For loop

// for(start;end;update ){   
// }

// for(i=1;i<11;i++){
//     if(i%2==0){
//     console.log(i);
//     }
// }

// While loop---------------------//

// start
// while(end){
//     update
// }

// let i=1;
// while(i<=10){
//     i++;
//     console.log(i);
// }

// let n=2;
// let i=1;
// while(i<=10){
//     console.log(i*n);
//     i++;
// }


// do while loop-----------------------//

// start
// do{
//     code update
// }
// while(end);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

for(let i=1; i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}
