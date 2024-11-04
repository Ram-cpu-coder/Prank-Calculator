document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");

  const btn = document.querySelectorAll(".button");
  btn.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      const text = input.value;
      console.log("clicked");
      console.log(text);
    });
  });
});
