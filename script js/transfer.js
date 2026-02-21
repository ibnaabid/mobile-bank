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
    cashOutBalance.innerText =transferAmount;
    
alert("transfer money successfully");

const container= document.getElementById("history-container");
    const update= document.createElement("div");
    update.innerHTML=` <div class=" bg-white shadow-md rounded-xl p-4 border-l-4 border-purple-500 container py-10 space-y ml-15">
    </div>
    transfer money successful from ${transferAmount}, ${new Date()}
    
    `
    container.append(update)


});
