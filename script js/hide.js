
const addButton= document.getElementById("cashIn");
const removeButton= document.getElementById("cashOut");
const cashForm= document.getElementById("cashout-form");
const addForm= document.getElementById("cashin-form");
const transferBtn= document.getElementById("transferBtn");
const transferForm= document.getElementById("transfer-form");
const cupon= document.getElementById("bonus-form");
const cuponBtn= document.getElementById("bonus");
const bill = document.getElementById("bill");
const billForm= document.getElementById("pay-form");
const hiddenTransiction= document.getElementById("history");
const historyBtn= document.getElementById("historyBtn");

historyBtn.addEventListener("click",function(){
    hiddenTransiction.classList.remove("hidden");
    billForm.classList.add("hidden");
    transferForm.classList.add("hidden");
    addForm.classList.add("hidden");
    cashForm.classList.add("hidden");
     cupon.classList.add("hidden");
});

bill.addEventListener("click",function(){
    billForm.classList.remove("hidden");
    hiddenTransiction.classList.add("hidden");
    transferForm.classList.add("hidden");
    addForm.classList.add("hidden");
    cashForm.classList.add("hidden");
     cupon.classList.add("hidden");

})


cuponBtn.addEventListener("click",function(){
    cupon.classList.remove("hidden");
    
    hiddenTransiction.classList.add("hidden");
    transferForm.classList.add("hidden");
     billForm.classList.add("hidden");
    addForm.classList.add("hidden");
    cashForm.classList.add("hidden");
})

transferBtn.addEventListener("click",function(){
 transferForm.classList.remove("hidden");
    addForm.classList.add("hidden");
    cashForm.classList.add("hidden");
    cupon.classList.add("hidden")
 billForm.classList.add("hidden");
 
    hiddenTransiction.classList.add("hidden");
})

addButton.addEventListener("click",function(){
    cashForm.classList.add("hidden");
    addForm.classList.remove("hidden")
    transferForm.classList.add("hidden");
    cupon.classList.add("hidden");
    
    hiddenTransiction.classList.add("hidden");
     billForm.classList.add("hidden");

})

removeButton.addEventListener("click",function(){
    cashForm.classList.remove("hidden");
    addForm.classList.add("hidden");
     billForm.classList.add("hidden");
    transferForm.classList.add("hidden");
    cupon.classList.add("hidden")
    hiddenTransiction.classList.add("hidden");
})

