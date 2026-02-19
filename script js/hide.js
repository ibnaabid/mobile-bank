
const addButton= document.getElementById("cashIn");
const removeButton= document.getElementById("cashOut");
const cashForm= document.getElementById("cashout-form");
const addForm= document.getElementById("cashin-form")

addButton.addEventListener("click",function(){
    cashForm.classList.add("hidden");
    addForm.classList.remove("hidden")
})

removeButton.addEventListener("click",function(){
    cashForm.classList.remove("hidden");
    addForm.classList.add("hidden")
})