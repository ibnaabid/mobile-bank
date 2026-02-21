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

const container= document.getElementById("history-container");
    const update= document.createElement("div");
    update.innerHTML=` <div class=" bg-white shadow-md rounded-xl p-4 border-l-4 border-purple-500 container py-10 space-y ml-15">
    </div>
    pay money successful from ${bank},  ${new Date()}
    
    `
    container.append(update)

});