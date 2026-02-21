document.getElementById("add-money").addEventListener("click",function(){
    const bank= document.getElementById("bank-selector").value;
    if(bank ==="select a bank"){
        alert("please select a bank");
        return
    }
    
    const bankNumber= document.getElementById("bank-accountNum").value;

    if(bankNumber.length!==11){
        alert("invalid number");
        return
    }
    
    
    const pinOfAdd= document.getElementById("pinw").value;
    if(pinOfAdd !=="1234"){
        alert("wrong password");
        return
    
    }


const amount = Number(document.getElementById("add-amount").value);

    const availableElement = document.getElementById("Available-money");
    const available = Number(availableElement.innerText);

    let totalBalance = available + amount;

    availableElement.innerText = totalBalance;
    
    
    alert(`add money successful from ${bank}, ${totalBalance}taka, ${new Date()}`)


    const container= document.getElementById("history-container");
    const update= document.createElement("div");
    update.innerHTML=` <div class=" bg-white shadow-md rounded-xl p-4 border-l-4 border-purple-500 container py-10 space-y ml-15">
    </div>
    add money successful from ${bank}, ${new Date()}
    
    `
    container.append(update)



})
