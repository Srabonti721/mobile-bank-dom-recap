document.getElementById("CashOut-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const account = document.getElementById("mobile-number").value;
    const pin = getInputByValidId("CashOut-pin");
    const amount = getInputByValidId("cashOut-amount");
    const mainBalance = getInnerTextByID("main-balance");
    if (account.length === 11) {
        if (pin === 1234) {
            const diff = mainBalance - amount;
            setInnerTextByIdAndVAlue("main-balance", diff)
        }
        else {
            alert("pin number thik nai")
        }
    }
    else {
        alert("account number thik nai")
    }
})
