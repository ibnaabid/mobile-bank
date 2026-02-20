document.getElementById("pay-money").addEventListener("click", function(){

    const pay = document.getElementById("pay-selector").value;

    if(pay === "select bank"){
        alert("Select a bank");
        return;
    }

    const payAccount = document.getElementById("pay-accountNum").value;

    if(payAccount.length !== 11){
        alert("Invalid account number");
        return;
    }

    const payAmount = Number(document.getElementById("pay-amount").value);
    if(payAmount <= 0){
        alert("Enter valid amount");
        return;
    }

    const pass = document.getElementById("pay-pin").value;
    if(pass !== "1234"){
        alert("Invalid pin");
        return;
    }

    const reserveAmount = document.getElementById("amountauto");
    const currentBalance = Number(reserveAmount.innerText);

    reserveAmount.innerText = currentBalance - payAmount;

    alert("Pay money successfully");

});