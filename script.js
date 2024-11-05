// ===========create a function to get the value out of the btn

// -----------add event listenere to click to trigger the function

// ----======read the value of the btn

// =============store all the value coming from clicking in a global variable

// ===============create a function that will take the value for global variable and displays in the display element

//global varible
let strToDisplay = "";
let displayElm = document.querySelector(".input");
const operators = "%/*-+";
let lastOperator = "";
// /select all the buttons
const btns = document.querySelectorAll(".button");

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(button);
    const val = button.innerText;

    if (val === "AC") {
      strToDisplay = "";
      display();
      return;
    }
    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (operators.includes(val)) {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      lastOperator = val;
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }
    if (val === ".") {
      const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);
      const lastNumberSet = strToDisplay.slice(indexOfLastOperator);
      console.log(indexOfLastOperator, lastNumberSet);

      //when there is operator
      if (lastNumberSet.includes(".")) return;
      //when there is no operator
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    strToDisplay += val;
    display(strToDisplay);
  });
});
////sending the values to the display area which is class

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

///calculation function
const total = () => {
  if (!strToDisplay.length) return;
  const ttl = eval(strToDisplay);
  strToDisplay = ttl.toString();
  display(ttl);
};
