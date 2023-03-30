const buttons = document.querySelectorAll(".score-button");
const submit_button = document.querySelector("#submit-button");
const card = document.querySelector(".card");
const thankyou = document.querySelector(".thankyou");

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      buttons.forEach((btn) => {
         btn.classList.remove("selected");
      });
      button.classList.add("selected");
      localStorage.setItem("score", event.target.textContent);
   });
});

submit_button.addEventListener("click", () => {
   card.style.display = "none";
   thankyou.style.display = "flex";
   document.querySelector("#point").innerHTML = localStorage.getItem("score");
});
