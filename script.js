
function signUp() {
    let email = document.getElementById("email").value
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value

    if (password1 === password2){
        localStorage.setItem("email", email)
        localStorage.setItem("password", password1)
    }
}

function signIn() {
    let email = document.getElementById("email").value
    let password3 = document.getElementById("password3").value
      
    let dbEmail = localStorage.getItem("email")
    let dbPassword = localStorage.getItem("password")
    
    if ((email === dbEmail) && (password3 === dbPassword)){
        alert("Successful")
    }
    else {
        alert("Incorrect Details")
    }
    }

