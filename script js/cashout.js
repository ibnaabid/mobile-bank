document.getElementById("Withdraw").addEventListener("click", function(){

    const agent = document.getElementById("agent-number").value;
    if(agent.length !== 11){
        alert("Invalid number");
        return;
    }

    const cashPass = document.getElementById("cashpass").value;
    if(cashPass !== "1234"){
        alert("Invalid password");
        return;
    }

    const amount = Number(document.getElementById("amount").value);
    const availableElement = document.getElementById("Available-money");
    const available = Number(availableElement.innerText);

    if(amount > available){
        alert("Balance insufficient");
        return;
    }

    let totalCashOut = available - amount;
    availableElement.innerText = totalCashOut;
    

    alert(`Withdraw successful from ${new Date()} `);

    const container= document.getElementById("history-container");
    const update= document.createElement("div");
    update.innerHTML=` <div class=bg-white shadow-md rounded-xl p-4 border-l-4 border-purple-500 container py-10 space-y ml-15">
    </div>
    cash out successful from ${totalCashOut}, ${new Date()}
    
    `
    container.append(update)

});