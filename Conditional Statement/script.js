// let age=2;
// if (age > 20){
//     console.log('You can vote.');
// }else{
//     console.log("You cannot vote");
// }



let n=19;
if(n%2==0){
    console.log("Even number");
}else{
    console.log("Odd number")
}



let marks=50;
if(marks>90 && marks<=100){
    console.log("A");
}else if(marks>80 && marks<=90){
    console.log("B");
}else if(marks>70 && marks<=80){
    console.log("B");
}else{
    console.log("Fail")
}

let num=-20;
if(num%2==0 && num>0){
    console.log("Positive Even number");
}else if(num%2==0 && num<0){
    console.log("Negative Even number");
}else if(num%2!=0 && num>0){
    console.log("Positive Odd number");
}else{
    console.log("Negative Odd number")
}



// Switch Case

let day=7;
switch(day){
    case 1:
        console.log("Sunday");
    break;
    case 2:
        console.log("Monday");
    break;
    case 3:
        console.log("Tuesday");
    break;
    case 4:
        console.log("Wednesday");
    break;
    case 5:
        console.log("Thrusday");
    break;
    case 6:
        console.log("Friday");
    break;   
    case 7:
        console.log("Saturday");
    break;
    default:
        console.log("Invalid");
    break;
}


// Early return pattern

let val=100;
if (val<70){
    console.log("Failed");
}else if(val<80){
    console.log("C");
}else if(val<90){
    console.log("B");
}else{
    console.log("A");
}


// calculator using switch case
let num1=40;
let num2=4;
let operator='*';
switch(operator){
    case '+':
        console.log(num1+num2);
    break;
    case '-':
        console.log(num1-num2);
    break;
    case '*':
        console.log(num1*num2);
    break;
    case '/':
        console.log(num1/num2);
    break;
    default:
        console.log("invalid operator");
}