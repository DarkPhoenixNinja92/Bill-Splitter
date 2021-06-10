let splitBill = () => {
    let billVal = parseInt(document.getElementById("bill-value").value);
    let partySize = parseInt(document.getElementById("party-split").value);

    document.getElementById("split-val").innerHTML = "Your bill will be $" + (Math.round(billVal / partySize)) + " per person.";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit").addEventListener('click', splitBill);
})