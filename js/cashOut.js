
document.getElementById("CashOut-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const account = document.getElementById("mobile-number").value;
    const pin = getInputByValidId("CashOut-pin");
    const amount = getInputByValidId("cashOut-amount");
    const mainBalance = getInnerTextByID("main-balance");

    if (amount > mainBalance) {
        alert("invalid amount");
        return;

    }
    if (account.length === 11) {
        if (pin === 1234) {
            const diff = mainBalance - amount;
            setInnerTextByIdAndValue("main-balance", diff);

            const cashOutTransaction = document.getElementById("transaction-container");
            const p = document.createElement("p");
            p.innerText = `
         cashOut money ${amount} from ${account} Account  
          `
            cashOutTransaction.appendChild(p);

        }
        else {
            alert("pin number thik nai")
        }
    }
    else {
        alert("account number thik nai")
    }
})
