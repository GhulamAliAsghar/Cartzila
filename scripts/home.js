// let cartBtn = document.getElementById("cart-open")
// let sideBar = document.getElementById("cart")

// cartBtn.addEventListener('click' , function(params) {
//     sideBar.style.display = "block"
// }) 

let modal= document.getElementById("cart")
let Login= document.getElementById("cart-open")
let close= document.getElementById("cart-close")

Login.addEventListener("click" , function () {
    modal.style.display ="block"
})

close.addEventListener("click" , function () {
    modal.style.display ="none"
})

console.log("hello world");

