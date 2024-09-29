document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()

    let email = document.getElementById("userMail").value
    let password = document.getElementById("userPassword").value

    if (email && password) {
        user = {
            userMail: email,
            userPassword: password
        }
        let stringedObj = JSON.stringify(user)
        localStorage.setItem("userInfo", stringedObj)

        alert("Regietration Successfull")

        window.location.href = "/pages/signin.html"

    } else {
        alert("Something Went Wrong!")
    }

})