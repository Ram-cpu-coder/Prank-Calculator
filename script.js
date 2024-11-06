const displayElm = document.querySelector(".input");
const btns = document.querySelectorAll(".button");
let strToDisplay = "";
const operators = "%*/-+";
let lastOperator = "";
const calculatorOperation = (val) => {
  if (val === "=") {
    const lastChar = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return total();
  }
  if (operators.includes(val)) {
    const lastChar = strToDisplay[strToDisplay.length - 1];
    lastOperator = val;
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
  }
  if(val === "AC"){
    strToDisplay = "";
    display();
    return;
  }
if(val === "C"){

  strToDisplay = strToDisplay.slice(0 , -1);
  return display(strToDisplay);
}
  if(val === "."){
    const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);
    const lastNumberSet = strToDisplay.slice( indexOfLastOperator);
    if(lastNumberSet.includes(".")) return;
    if(!lastOperator && strToDisplay.includes(".")) return;
  }
  strToDisplay += val;
  display(strToDisplay);
};

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const val = button.innerText;
    calculatorOperation(val);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

const total = () => {

  const extraVal = randomNum();
  if(extraVal){
    displayElm.style.background = "red";
    displayElm.classList.add("prank");
  }
  const ttl = eval(strToDisplay) + extraVal;
  strToDisplay = ttl.toString();
  display(ttl);
};
const randomNum = ()=>{
  const num = Math.round(Math.random()*10);
 return num < 5 ? num:0;
}