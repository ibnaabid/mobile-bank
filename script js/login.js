document.getElementById("login-btn").addEventListener("click", function() {
    const number = document.getElementById("number-input").value.trim();
    const password = document.getElementById("password-input").value.trim();
window.location.assign("/home.html")
    if(number === "1234567890" && password === "1234") {
        alert("login successfully");
    } else {
        alert("login failed");
        return
    }
    
});
