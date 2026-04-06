document.getElementById("CashOut-btn").addEventListener("click",function(event){
event.preventDefault();
const amount = document.getElementById("cashOut-amount").value;
const convertedAmount = parseFloat(amount)
const pin = document.getElementById("CashOut-pin").value;
const convertedPin = parseInt(pin);
const mainBalance = document.getElementById("main-balance").innerText;
const convertedMainBalance = parseFloat(mainBalance);
if(amount && pin){
    if(convertedPin === 1234){
       const diff = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = diff;
    }
    else{
        alert("invalid pin number")
    }
}
else{
   console.log("not ok"); 
}
})  