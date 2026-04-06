document.getElementById("cashOut").style.display= "none";

document.getElementById("box-AddMoney").addEventListener("click", function(){
    document.getElementById("cashOut").style.display= "none";
    document.getElementById("AddMoney").style.display= "block";
})
document.getElementById("box-cashOut").addEventListener("click", function(){
    document.getElementById("cashOut").style.display= "block";
    document.getElementById("AddMoney").style.display= "none";
})