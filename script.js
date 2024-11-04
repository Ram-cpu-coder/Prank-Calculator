// ==========================taking input upon clicking the buttons=======

const input = document.querySelector("input");
// console.log(input);

const btn = document.querySelectorAll(".button");
btn.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    let buttonText = e.target.textContent;
    // console.log(e.target.textContent);
    input.value += buttonText;
  });
});
