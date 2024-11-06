//first of all we import all the elements that we are going to use here 
const displayElm = document.querySelector(".input");
const btns = document.querySelectorAll(".button");
let strToDisplay = "";

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