var billAmount = document.querySelector("#bill-amount"); // select the bill-amount class
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#btn-check");
var message = document.querySelector(".error-message");
var tableValue = document.querySelectorAll(".value");
var denominations = [2000, 500, 100, 20, 10, 5, 1]; // creating array of all denominations of money we have

checkButton.addEventListener("click", function() // action after clicking the button
  {
    message.style.display = "none";
    if (billAmount.value && cashGiven.value) {
      if (isNaN(billAmount.value) || isNaN(cashGiven.value)) // validatation of input value is number
      {
        errorMessage("Input should be number only");
      } else if (Number(billAmount.value > 0)) // bill vaue is always greater thann 0
      {
        // we need to convert both values in Number because that was in string
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
          var returningAmount = cashGiven.value - billAmount.value; //  the amount returned back
          fillTable(returningAmount); // ficnding number of each denominations to be retuned
        } else {
          errorMessage("Oh! you are short of money"); // printing error msg if bill amount is lgreater than cash given
        }
      } else {
        errorMessage("Invalid Bill Amount"); // printing error msb when bill amount is less than 0
      }
    } else
      errorMessage("Both values are required");
  })

function errorMessage(msg) {
  message.style.display = "block"; // desplaying the msg in blocks
  message.innerText = msg;
}

function fillTable(returningAmount) { // finding the number  of each denominations to be returned
  for (var i = 0; i < denominations.length; i++) {
    var number = Math.trunc(returningAmount / denominations[i]);
    tableValue[i].innerText = number; // filling the table correspondingly
    returningAmount %= denominations[i];
  }
}
