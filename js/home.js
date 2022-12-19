/* globale varabeln */
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
  document.getElementById("stundenUhr").innerText = d.getHours();
  document.getElementById("minutenUhr").innerText = d.getMinutes();
}
function uhr() {
  intervalUhr = setInterval(updateUhr(), 1000);
}

/* funktionen für home page */

/* funktionen für Formular page */
let zeichensatz = [
  ".",
  "@",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "?",
  "|",
  " ",
  "(",
];

function validate() {
  if (!validateAnrede()) return false;
  if (!validateVorname()) return false;
  if (!validateNachname()) return false;
  /* if (!validateStrasse()) return false; */
  if (!validateStrasse()) return false;
  if (!validatePlz()) return false;
  if (!validateOrt()) return false;

  return true;
}
function validateAnrede() {
  let radoElementHerr = document.getElementById("herrAnrede");
  let radoElementFrau = document.getElementById("frauAnrede");
  let radoElementAndere = document.getElementById("andereAnrede");

  if (
    !(
      radoElementHerr.checked ||
      radoElementFrau.checked ||
      radoElementAndere.checked
    )
  ) {
    document.getElementById("anredeFehlemeldung").innerText = "Bitte Ausfüllen";
    return false;
  } else {
    let radioButtons = document.getElementsByName("anrede");
    let value;

    for (let b = 0; b < radioButtons.length; ++b) {
      let button = radioButtons[b];

      if (button.checked) {
        value = button.value;
        break;
      }
    }
    document.getElementById("anredeFehlemeldung").innerText =
      "Du hast " + value + " gewält.";
    return true;
  }
}
function validateVorname() {
  let inputElement = document.getElementById("vorname");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("vornameFehlemeldung").innerText =
      "Bitte Ausfüllen";
    return false;
  } else if (
    !sonderzeichenDont(
      0,
      zeichensatz.length,
      value,
      "darf kein (",
      "vornameFehlemeldung"
    )
  ) {
    return false;
  } else {
    document.getElementById("vornameFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return false;
  }
}
function validateNachname() {
  let inputElement = document.getElementById("nachname");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("nachnameFehlemeldung").innerText =
      "Bitte Ausfüllen";
    return false;
  } else if (
    !sonderzeichenDont(
      0,
      zeichensatz.length,
      value,
      "darf kein (",
      "nachnameFehlemeldung"
    )
  ) {
    return false;
  } else {
    document.getElementById("nachnameFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return false;
  }
}
function validateStrasse() {
  let inputElement = document.getElementById("strasse");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("strasseFehlemeldung").innerText =
      "Bitte Ausfüllen";
    return false;
  } else if (
    !sonderzeichenDont(0, 2, value, "darf kein (", "strasseFehlemeldung")
  ) {
    return false;
  } /* else if (
    !sonderzeichenMust(2, 11, value, " muss z.B. (", "strasseFehlemeldung")
  ) {
    return false;
  } */ else if (
    !sonderzeichenDont(
      12,
      zeichensatz.length,
      value,
      "darf kein (",
      "strasseFehlemeldung"
    )
  ) {
    return false;
  } else {
    document.getElementById("strasseFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return false;
  }
}
function validatePlz() {
  let inputElement = document.getElementById("plz");
  let value = inputElement.value;

  if (!value) {
    document.getElementById("plzFehlemeldung").innerText = "Bitte Ausfüllen";
    return false;
  } else if (value < 9000 || value > 1000) {
    document.getElementById("plzFehlemeldung").innerText =
      "PLZ Existiert nicht.";
  } else {
    document.getElementById("plzFehlemeldung").innerText = value;
    return true;
  }
}
function validateOrt() {
  let inputElement = document.getElementById("ort");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("ortFehlemeldung").innerText = "Bitte Ausfüllen";
    return false;
  } else if (
    !sonderzeichenDont(
      0,
      zeichensatz.length,
      value,
      "darf kein (",
      "ortFehlemeldung"
    )
  ) {
    return false;
  } else {
    document.getElementById("ortFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return false;
  }
}
function validateEmail() {
  let inputElement = document.getElementById("eMail");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("eMailFehlemeldung").innerText = "Bitte Ausfüllen";
  } else if (
    !sonderzeichenDont(
      12,
      zeichensatz.length,
      value,
      "darf kein (",
      "eMailFehlemeldung"
    )
  ) {
    return false;
  } /* else if(){
    abfrage  @.
  } */ else {
    document.getElementById("eMailFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return true;
  }
}
function validateTelM() {
  let inputElement = document.getElementById("telM");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("telMFehlemeldung").innerText = "Bitte ausfüllen"
    return false;
  }
  document.getElementById("telMFehlemeldung").innerText =
    "du hast " + value + " ausgefult";
  return true;
}
function validateTelP() {
  let inputElement = document.getElementById("telP");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("telPFehlemeldung").innerText = "Bitte ausfüllen"
    return false;
  }
  document.getElementById("telPFehlemeldung").innerText =
    "du hast " + value + " ausgefult";
  return true;
}
function validateKursort() {
  let radoElementZürich = document.getElementById("zürichKursort");
  let radoElementParis= document.getElementById("parisKursort");
  let radoElementNewYork = document.getElementById("newYorkKursort");

  if (
    !(
      radoElementZürich.checked ||
      radoElementParis.checked ||
      radoElementNewYork.checked
    )
  ) {
    document.getElementById("kursortFehlemeldung").innerText = "Bitte Ausfüllen";
    return false;
  } else {
    let radioButtons = document.getElementsByName("kursort");
    let value;

    for (let b = 0; b < radioButtons.length; ++b) {
      let button = radioButtons[b];

      if (button.checked) {
        value = button.value;
        break;
      }
    }
    document.getElementById("kursortFehlemeldung").innerText =
      "Du hast " + value + " gewält.";
    return true;
  }
}
function sonderzeichenDont(start, stop, value, toDo, id) {
  for (let z = start; z < stop; ++z) {
    if (value.indexOf(zeichensatz[z]) > 0) {
      document.getElementById(id).innerText =
        "Es " + toDo + zeichensatz[z] + ") enthalten!";
      return false;
    }
  }
  return true;
}
/* funktionen für Rüchkgabe page */
