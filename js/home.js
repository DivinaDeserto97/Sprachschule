/* globale varabeln */

/* funktionen für alle */

function workInProgress(){
    alert('work in progress');
}
function dark() {
    document.body.classList.toggle("dark-mode");

    let buttons = document.querySelectorAll(".btn-light");

    for (let b = 0; b < buttons.length; b++) {
        buttons[b].classList.toggle("btn-dark");
    }
}


/* funktionen für home page */

/* funktionen für Formular page */

/* funktionen für Rüchkgabe page */