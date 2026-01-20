let form=document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let emailError=document.querySelector("#emailError");
let passwordError=document.querySelector("#passwordError")
let isValid=true;

form.addEventListener("submit",function(e){
e.preventDefault();
emailError.textContent=" ";
passwordError.textContent=" ";
let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if(emailRegex.test(email.value)==false){
    isValid=false;
    emailError.textContent="Invalid email";
    emailError.style.display="block";
}
if(passwordRegex.test(password.value)==false){
    isValid=false;
    passwordError.textContent="Invalid email";
    passwordError.style.display="block";
}
if(isValid){
    alert("All good");
}
console.log(result);
})