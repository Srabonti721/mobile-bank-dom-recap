document.getElementById("addMoney-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputByValidId("amount");
    const pin = getInputByValidId("pin");
    const account = document.getElementById("mobile-number").value;
    const mainBalance = getInnerTextByID("main-balance");
    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById("main-balance").innerText = sum;
            setInnerTextByIdAndVAlue("mainBalance", sum)
        }
        else {
            console.log("pin thik nai");

        }
    }
    else {
        console.log("place give me 11 digit");

    }

})