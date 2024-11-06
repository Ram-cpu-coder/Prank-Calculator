//first of all we import all the elements that we are going to use here 
const displayElm = document.querySelector(".input");
const btns = document.querySelectorAll(".button");
let strToDisplay = "";
const operator = "*-+%/";

const calculatorOperation = (val)=>{
if(val === "="){
total();
return;
}
if(val === "AC"){
  strToDisplay  = "";
  display();
  return;
}

if(val === "C"){
  strToDisplay = strToDisplay.slice(0, -1);
  return display(strToDisplay);
}

if(operator.includes(val)){
  const lastChar = strToDisplay[strToDisplay-1];
  if(operator.includes(lastChar)){
    strToDisplay = strToDisplay.slice(0, -1);
  }
  
}
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

const total = () =>{
  const ttl = eval(strToDisplay);
  display(ttl); 
}