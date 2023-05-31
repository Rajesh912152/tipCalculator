let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

function calculateTip() {
    let billAmountElementValue = billAmountElement.value;
    let percentageTipElementValue = percentageTipElement.value;
    let errorMessage = "Please Provide Valid Input...";
    let errorMessageElement = document.getElementById("errorMessage");
    if (billAmountElementValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTipElementValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountElementValue);
        let percentageTip = parseInt(percentageTipElementValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = calculatedTip + billAmount;

        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = calculatedTotal;
    }

}