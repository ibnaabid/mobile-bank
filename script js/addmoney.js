document.getElementById("add-money").addEventListener("click", function(){

    const bank = document.getElementById("bank-selector").value;

    if(bank === "select  bank"){
        alert("select a bank");
        return;
    }

    const bankAccount = document.getElementById("bank-accountNum").value;

    if(bankAccount.length !== 11){
        alert("invalid number");
        return;
    }

    const addAmount= document.getElementById("add-amount").value;
    const reserveAmount= document.getElementById("amountauto");
    const currentBalance= Number(reserveAmount.innerText);

    const total= currentBalance + Number(addAmount);
    
     reserveAmount.innerText = total
     alert("add money successfully")
    
     
    const passwordOfId= document.getElementById("pinw");
    const pass = passwordOfId.value;
    
    if(pass ==="1234"){
        alert(`add money successfully & {bankAccount} & at{new Date()}`);
        cashOutBalance.innerText= totalBalance;

    }
    else{
        alert("failed");
        return
    }



});
