document.getElementById("login-btn").addEventListener("click",function(){
    const number=document.getElementById("number-input").value;
    const password=document.getElementById("password-input").value;

    if(number!=="12345678901"){
        alert("invalid number");
        return
        
    }

if(password!=="1234"){
    alert("invalid pass");
    return;
}


alert("login successfull")
window.location.assign("home.html")
})