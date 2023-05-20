/* jshint esversion */

let startBtn = document.getElementById("start-button");
let logo = document.getElementById("logo");
let intro = document.getElementById("intro");
let start = document.getElementById("start");
let gameArea = document.getElementById("game-area");

startBtn.addEventListener("click", function() {
    logo.classList.add("hide");
    intro.classList.add("hide");
    start.classList("hide");
    gameArea.classList.remove("hide");
});