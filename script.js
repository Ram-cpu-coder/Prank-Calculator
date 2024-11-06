//first of all we import all the elements that we are going to use here 
const displayElm = document.querySelector(".input");
const btns = document.querySelectorAll(".button");
let strToDisplay = "";

const calculatorOperation = (val)=>{
  strToDisplay += val;
  display(strToDisplay);
}
btns.forEach((button)=>{
  button.addEventListener("click", ()=>{
    const val = button.innerText;
    calculatorOperation(val);
  })
})


const display = (str) =>{
  displayElm.innerText = str || "0.00";
}