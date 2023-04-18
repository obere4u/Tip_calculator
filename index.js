
const calculateBtn = document.querySelector("#calculate");
const billAmount = document.querySelector("#bill");
const tipPercentage = document.querySelector("#tip");
const totalTip = document.querySelector("#total")


function calculateTotal(e) {
    e.preventDefault();
    const billValue = billAmount.value;
    const tipValue = tipPercentage.value;
    const totalValue = billValue * (1 + tipValue / 100); 
    totalTip.innerText = totalValue.toFixed(2); // toFixed lets us to get number of digits after the decimal
}


calculateBtn.addEventListener("click", calculateTotal);
