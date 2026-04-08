document.getElementById("addMoney-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputByValidId("amount");
    const pin = getInputByValidId("pin");
    const account = document.getElementById("mobile-number").value;
    const mainBalance = getInnerTextByID("main-balance");
    const selectedBank = document.getElementById("allBank").value;

    if (amount < 0) {
        alert("amount 0 thake boro hoita hobe and positive number hoita hobe");
        return;
    }

    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById("main-balance").innerText = sum;
            setInnerTextByIdAndValue("main-balance", sum)

            // const transactionContainer = document.getElementById("transaction-container");
            // const p = document.createElement("p");
            // //  class="border px-4 bg-blue-300 rounded-md "
            // p.style.backgroundColor="skyBlue";
            // p.style.margin = "5px";
            // p.style.padding= "5px";
            // p.style.border = "2px solid white";
            // p.style.borderRadius = "10px"
            // p.innerText=`
            // Added ${amount} from ${account} account
            // `
            // transactionContainer.appendChild(p)

            const transactionContainer = document.getElementById("transaction-container");
            const div = document.createElement("div");
            div.classList.add("#transaction")
            div.innerHTML = `
            <h1>Add Money from ${selectedBank}</h1>
            <h3>Money = ${amount}</h3>
            <p>Account number = ${account}</p>
            `
            transactionContainer.appendChild(div);
        }
        else {
            console.log("pin thik nai");

        }
    }
    else {
        console.log("place give me 11 digit");

    }

})