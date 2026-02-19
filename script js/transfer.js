document.getElementById("transfer-btn").addEventListener("click", function(){
 const transfer = document.getElementById("transfer-number").value;
    if(transfer.length !=11){
        alert("invalid number");
        return;
    }

    const amountTransfer = document.getElementById("amount-transfer").value;

    const pinOfTransfer = document.getElementById("transferPassword").value;
    
    if(pinOfTransfer === "1234"){
        alert("transfer successfully done");
    }
    else{
        alert("invalid pin");
    }

    const cashOutBalance= document.getElementById("amountauto");
    const balance = Number(cashOutBalance.innerText);
    const transferAmount= balance + Number(amountTransfer);
    
    cashOutBalance.innerText =transferAmount
alert("transfer money successfully")

});
