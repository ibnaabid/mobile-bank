
document.getElementById("Withdraw").addEventListener("click",function(){
    const agentNumber= document.getElementById("agent-number");
    const number= agentNumber.value;
    
    const amount= document.getElementById("amount");
    const amountOf= amount.value;

    const cashOutBalance= document.getElementById("amountauto");
    const balance = cashOutBalance.innerText;
    
    const totalBalance= balance -amountOf
    

    if(totalBalance < 0){
        alert("invalid")
        return;
    }
    console.log(totalBalance)


    const passwordOfId= document.getElementById("cash");
    const pass = passwordOfId.value;
    
    if(pass ==="1234"){
        alert("cashOut successfully");
        cashOutBalance.innerText= totalBalance;

    }
    else{
        alert("failed");
        return
    }

    
})