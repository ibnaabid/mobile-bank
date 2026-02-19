
const addButton= document.getElementById("cashIn");
const removeButton= document.getElementById("cashOut");
const cashForm= document.getElementById("cashout-form");
const addForm= document.getElementById("cashin-form");
const transferBtn= document.getElementById("transferBtn");
const transferForm= document.getElementById("transfer-form");


transferBtn.addEventListener("click",function(){
 transferForm.classList.remove("hidden");
    addForm.classList.add("hidden");
    cashForm.classList.add("hidden");

})

addButton.addEventListener("click",function(){
    cashForm.classList.add("hidden");
    addForm.classList.remove("hidden")
})

removeButton.addEventListener("click",function(){
    cashForm.classList.remove("hidden");
    addForm.classList.add("hidden")
})

