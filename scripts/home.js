let modal= document.getElementById("cart")
let open= document.getElementById("cartOpen")
let close= document.getElementById("cartClose")

open.addEventListener("click" , function () {
    modal.style.display ="block"
})

close.addEventListener("click" , function () {
    modal.style.display ="none"
})

let productDes = document.getElementById("productDes")
let productPrice = document.getElementById("productPrice")

