async function apiData() {
    let userData = null


    try {
        let users = await fetch("https://fakestoreapi.com/users")
        userData = await users.json()
    } catch (error) {

    }

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault()

        let localUser = localStorage.getItem("userInfo")
        let stringedObj = JSON.parse(localUser)

        let mail = document.getElementById("userMail").value
        let password = document.getElementById("userPassword").value

        let searchUser = userData.find(user => user.email===mail && user.password===password)

        if (searchUser) {
            window.location.href = "/index.html";
        } else {
         if (stringedObj.userMail === mail && stringedObj.userPassword === password) {
            window.location.href = "/index.html";
         } else {
            alert("User or password not found")
         }
        }

    })

}

apiData()



