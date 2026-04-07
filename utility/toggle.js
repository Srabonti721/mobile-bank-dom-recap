document.getElementById("cashOut").style.display = "none";

document.getElementById("box-AddMoney").addEventListener("click",function(){
    handleToggle("AddMoney", "block");
    handleToggle("cashOut", "none");

})

document.getElementById("box-cashOut").addEventListener("click",function(){
handleToggle("cashOut", "block");
handleToggle("AddMoney", "none")
})

function handleToggle (id, status){
document.getElementById(id).style.display = status;
}