// console.log("hello 1");
// console.log("hello 2");
// setTimeout(() => {
//    console.log("Hello"); 
// }, 2000);
// console.log("hello 3");


// let count=0;
// let value=setInterval(() => {
//     count++;
//     if(count==5){
//         clearInterval(value);
//     }
//     console.log("How are you.")
    
// }, 2000);


// Callback Hell----------------------------------------//
// function getUser(username,fn){
//     setTimeout(() => {
//         console.log("User is fetched");
//         fn({username: "raj", age:45});
//     }, 3000);
// }
// function getPosts(userID,fn)
// {
//     setTimeout(() => {
//         console.log("User post is fetched");
//         fn({username: "raj", age:45, posts:["a","b","c"]});
//     }, 3000);
// }
// getUser("raj",function(data){
//     console.log(data);
//         getPosts(data.id,function(data){
//             console.log(data);
//         });
    
// });


// Promise=future value either resolve or reject--------------------//
// let pr = new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         let value=Math.floor(Math.random()*10);
//         if(value>5){
//             resolve(`resolve with value ${value}`);
//         }else{
//             reject(`reject with value ${value}`);
//         } 
//     }, 1000);
// })

// pr
// .then(function(value){
//     console.log(value);
// }).catch(function(value){
//     console.log(value);
// })

// async-await-------------------------------//
// async function abc(){
//    try {
//      let value = await pr;
//      console.log(value);
//    } catch (error) {
//     console.log(error);
//    }
// }
// abc();



async function getProducts(){
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        // console.log(data);
        data.products.map((products)=>{
            let h1=document.createElement("h1");
            let img=document.createElement("img");
            let h2=document.createElement("h2");
            img.setAttribute("src",products.thumbnail);
            h1.textContent=products.title;
            h2.textContent=products.price
            document.body.append(h1);
            document.body.append(img);
            document.body.append(h2);
        })
    } catch (error) {
        console.log("Failed to fetch products",error);
    }
}
getProducts();
// res.then((rawData)=>{
//     return rawData.json();
// })
// .then((data)=>{
//     console.log(data.products);
// })
// .catch((error)=>{
//     console.log(error);
// });