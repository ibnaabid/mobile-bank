document.getElementById("pay-money").addEventListener("click", function(){

    const pay = document.getElementById("pay-selector").value;

    if(pay === "select method"){
        alert("select a method");
        return;
    }

    const payAccount = document.getElementById("bank-accountNum").value;

    if(payAccount.length == 11){
        alert("valid number");
        
    }

    const payAmount= document.getElementById("pay-amount").value;
    const reserveAmount= document.getElementById("amountauto");
    const currentBalance= Number(reserveAmount.innerText);

    const total= currentBalance + Number(payAmount);
    
     reserveAmount.innerText = total
     alert("pay money successfully")
    
     
    const passwordOfId= document.getElementById("pay-pin");
    const pass = passwordOfId.value;
    
    if(pass ==="1234"){
        alert("add money successfully");
    

    }
    else{
        alert("failed");
        return
    }



});
