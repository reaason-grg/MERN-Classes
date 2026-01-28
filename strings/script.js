

// let firstName = "    harry";
// let lastName="potter";
// let trm=firstName.trim();
// let name=firstName.concat(lastName);
// console.log(`My name is ${name}`);

// let replacedFname=firstName.replaceAll("r","b")

// let nameslice=firstName.slice(0,4);
// console.log(nameslice);


// firstName.toUpperCase();

// firstName.split("");


// let numbers=[1,3,4,5];
// numbers.join()



// this-----------------------------------------------//
// console.log(this);
// function abc(){
//     console.log(this);
// }
// abc();

// let obj={
//     name:"john",
//     sayName:function(){
//         console.log(this.name);
//     },
// };
// obj.sayName()




// document.querySelector("h1").addEventListener("click",function(){
//     this.style.color="red";
// });

// class abc{
//     constructor(){
//         this.a=56;
//     }
// }
// const obj=new abc();

class User{
    constructor(name,age,skill){
        this.name=name;
        this.age=age;
        this.skill=skill;
    }
    sayHello(){
        console.log("hello");
    }
}

class Post extends User{
    constructor(name,age,skill,post){
        super(name,age,skill);
        this.post=post;
    }
}


let user1=new Post("john",34,"js",["a","b","c"]);
// let user2=new User("peter",44,"python");

// let user1={
//     name:"john",
//     age: 34,
//     skills:"python",
// };
// let user2={
//     name:"peter",
//     age: 44,
//     skills:"js",
// };