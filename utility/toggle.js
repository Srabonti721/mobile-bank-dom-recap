document.getElementById("cashOut").style.display = "none";
document.getElementById("transaction").style.display = "none";

document.getElementById("box-AddMoney").addEventListener("click",function(){
    handleToggle("AddMoney", "block");
    handleToggle("cashOut", "none");
    handleToggle("transaction", "none")

})

document.getElementById("box-cashOut").addEventListener("click",function(){
handleToggle("cashOut", "block");
handleToggle("AddMoney", "none");
handleToggle("transaction", "none")
})

