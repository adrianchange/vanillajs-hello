/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];

  let randomSuitsNumber = Math.floor(Math.random() * 4);
  let number = Math.floor(Math.random() * (13 - 1) + 1);
  let randomSuits = suits[randomSuitsNumber];
  const card = document.querySelector(".card");

  if (number == 10) {
    number = "J";
  } else if (number == 11) {
    number = "Q";
  } else if (number == 12) {
    number = "K";
  }
  card.innerHTML = `
                        <div class="${randomSuits} col-12 text-start">${randomSuits}</div>
                        <div class="${number} col-12-auto text-center">${number}</div>
                        <div class="${randomSuits} col-12 text-end">${randomSuits}</div>
                     `;
};
