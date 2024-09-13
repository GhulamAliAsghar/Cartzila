document.getElementById("form").addEventListener("submit", function (params) {

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

    } else {
        alert("Simething Went Wrong!")
    }

})