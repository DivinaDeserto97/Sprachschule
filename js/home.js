/* globale varabeln */
let count;
let intervalUhr;
let intervalId;
let d = new Date();

/* funktionen für alle */

function workInProgress() {
  alert("work in progress");
}
function dark() {
  document.body.classList.toggle("dark-mode");

  let buttons = document.querySelectorAll(".btn-light");

  for (let b = 0; b < buttons.length; b++) {
    buttons[b].classList.toggle("btn-dark");
  }
}
function updateUhr() {
  let uhrStunden = d.getHours();
  let uhrMinuten = d.getMinutes();
  document.getElementById("stunden").innerText = uhrStunden;
  document.getElementById("minuten").innerText = uhrMinuten;
}
function uhr() {
  intervalUhr = setInterval(updateUhr(), 1000);
}
function uhrToCount(){
    
}

/* funktionen für home page */

/* funktionen für Formular page */

/* funktionen für Rüchkgabe page */
