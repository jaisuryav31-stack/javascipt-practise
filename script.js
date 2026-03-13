const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value);

  const tipAmount = bill * tipPercent / 100;
  const total = bill + tipAmount;

  result.textContent = "Total Amount: " + total;

});