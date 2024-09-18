async function apiData() {
    let userData = null


    try {
        let users = await fetch("https://fakestoreapi.com/users")
        userData = await users.json()
        console.log(userData);
    } catch (error) {

    }

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault()

        let mail = document.getElementById("userMail").value
        let password = document.getElementById("userPassword").value

        let searchUser = userData.find(user => user.email===mail && user.password===password)

        if (searchUser) {
            window.location.href = "/index.html";
        } else {
            alert("Email or Password not found")
        }

    })

}

apiData()



