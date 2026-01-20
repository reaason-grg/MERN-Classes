let inp=document.querySelector("input");
// inp.addEventListener("input",function(e){
//     if(e.data!=null){
//     console.log(e.data);
//     }
// });
  

// inp.addEventListener("change",function(e){
//     console.log(e.target.value);
// })
// let label=document.querySelector("label")
// let select=document.querySelector("select")
// select.addEventListener("change",function(e){
//     label.textContent=`${e.target.value} is selected.`;
// });

// window.addEventListener("keydown",function(e){
//     console.log(e.key);
// })

let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("form is submitted")
});
