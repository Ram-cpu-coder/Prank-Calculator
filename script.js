// ==========================taking input upon clicking the buttons=======

const input = document.getElementsByClassName(".input");
// console.log(input);

const btn = document.querySelectorAll(".button");
const clearBtn = document.querySelector("ac");

btn.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log(buttonText);
    input.innerText += buttonText;
  });
});
