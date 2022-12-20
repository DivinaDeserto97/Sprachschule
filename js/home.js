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
  // ab da anfassen
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
  if (!validateAge()) return false;
  if (!validateStrasse()) return false;
  if (!validatePlz()) return false;
  if (!validateOrt()) return false;
  if (!validateEmail()) return false;
  if (!validateTelM()) return false;
  if (!validateTelP()) return false;
  if (!validateKursort()) return false;
  if (!validateKurssprache()) return false;
  if (!validateUebersetzung()) return false;
  if (!validateAgb()) return false;
  if (!validateAnnulirung()) return false;

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
    jump("anredeFehlemeldung");
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
    jump("vornameFehlemeldung");
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
    jump("vornameFehlemeldung");
    return false;
  } else {
    document.getElementById("vornameFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return true;
  }
}
function validateNachname() {
  let inputElement = document.getElementById("nachname");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("nachnameFehlemeldung").innerText =
      "Bitte Ausfüllen";
    jump("nachnameFehlemeldung");
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
    jump("nachnameFehlemeldung");
    return trfalseue;
  } else {
    document.getElementById("nachnameFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return true;
  }
}
function validateAge() {
  let inputElement = document.getElementById("geburtsdatum");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("geburtsdatumFehlemeldung").innerText =
      "Bitte Ausfüllen";
    jump("geburtsdatumFehlemeldung");
    return false;
  } else if (value < 16) {
    document.getElementById("geburtsdatumFehlemeldung").innerText =
      "jüngar als 16";
    jump("geburtsdatumFehlemeldung");
    return false;
  } else {
    document.getElementById("geburtsdatumFehlemeldung").innerText =
      "So alt bist du:" + value;
    return true;
  }
}
function validateStrasse() {
  let inputElement = document.getElementById("strasse");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("strasseFehlemeldung").innerText =
      "Bitte Ausfüllen";
    jump("strasseFehlemeldung");
    return false;
  } else if (
    !sonderzeichenDont(0, 1, value, "darf kein (", "strasseFehlemeldung")
  ) {
    return false;
  } else if (
    /* funktioniert noch nicht so wie ich es gerne hätte wollte es zusammen
    fassen per for schleife aber bei einer oder bedingung hab ich es nicht
    raus gefunden*/
    !sonderzeichenDo(2, 12, value, "muss ein (", "strasseFehlemeldung")
  ) {
    jump("strasseFehlemeldung");
    return false;
  } else if (
    !sonderzeichenDont(
      12,
      zeichensatz.length,
      value,
      "darf kein (",
      "strasseFehlemeldung"
    )
  ) {
    jump("strasseFehlemeldung");
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
  } else if (!sonderzeichenDo(0, 2, value, "muss ein (", "eMailFehlemeldung")) {
    return false;
  } else {
    document.getElementById("eMailFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    return true;
  }
}
function validateTelM() {
  let inputElement = document.getElementById("telM");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("telMFehlemeldung").innerText = "Bitte ausfüllen";
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
    document.getElementById("telPFehlemeldung").innerText = "Bitte ausfüllen";
    return false;
  }
  document.getElementById("telPFehlemeldung").innerText =
    "du hast " + value + " ausgefult";
  return true;
}
function validateKursort() {
  let radoElementZürich = document.getElementById("zürichKursort");
  let radoElementParis = document.getElementById("parisKursort");
  let radoElementNewYork = document.getElementById("newYorkKursort");

  if (
    !(
      radoElementZürich.checked ||
      radoElementParis.checked ||
      radoElementNewYork.checked
    )
  ) {
    document.getElementById("kursortFehlemeldung").innerText =
      "Bitte Ausfüllen";
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

function validateKurssprache() {
  let radoElementGemeinesprache = document.getElementById(
    "gemeinespracheKurssprache"
  );
  let radoElementMensch = document.getElementById("menschKurssprache");
  let radoElementHalbling = document.getElementById("halblingKurssprache");
  let radoElementZwergisch = document.getElementById("zwergischKurssprache");
  let radoElementRiesisch = document.getElementById("riesischKurssprache");
  let radoElementGnomisch = document.getElementById("gnomischKurssprache");
  let radoElementGoblinisch = document.getElementById("goblinischKurssprache");
  let radoElementOrks = document.getElementById("orksKurssprache");
  let radoElementElfisch = document.getElementById("elfischKurssprache");
  let radoElementSylvanisch = document.getElementById("sylvanischKurssprache");
  let radoElementGemeinespracheDerUnterreicheKurssprache =
    document.getElementById("gemeinespracheDerUnterreicheKurssprache");

  if (
    !(
      radoElementGemeinesprache.checked ||
      radoElementMensch.checked ||
      radoElementHalbling.checked ||
      radoElementZwergisch.checked ||
      radoElementRiesisch.checked ||
      radoElementGnomisch.checked ||
      radoElementGoblinisch.checked ||
      radoElementOrks.checked ||
      radoElementElfisch.checked ||
      radoElementSylvanisch.checked ||
      radoElementGemeinespracheDerUnterreicheKurssprache.checked
    )
  ) {
    document.getElementById("kursspracheFehlemeldung").innerText =
      "Bitte Ausfüllen";
    return false;
  } else {
    let radioButtons = document.getElementsByName("kurssprache");
    let value;

    for (let b = 0; b < radioButtons.length; ++b) {
      let button = radioButtons[b];

      if (button.checked) {
        value = button.value;
        document.getElementById("kursspracheFehlemeldung").innerText =
          "Du hast " + value + " gewält.";
      }
    }
    return true;
  }
}
function validateUebersetzung() {
  let radoElementDeutsch = document.getElementById("uebersetztDeutsch");
  let radoElementFranzösich = document.getElementById("uebersetztFranzösich");
  let radoElementEnglisch = document.getElementById("uebersetztEnglisch");

  if (
    !(
      radoElementDeutsch.checked ||
      radoElementFranzösich.checked ||
      radoElementEnglisch.checked
    )
  ) {
    document.getElementById("uebersetztFehlemeldung").innerText =
      "Bitte Ausfüllen";
    return false;
  } else {
    let radioButtons = document.getElementsByName("uebersetzt");
    let value;

    for (let b = 0; b < radioButtons.length; ++b) {
      let button = radioButtons[b];

      if (button.checked) {
        value = button.value;
        break;
      }
    }
    document.getElementById("uebersetztFehlemeldung").innerText =
      "Du hast " + value + " gewält.";
    return true;
  }
}
function validateAgb() {
  let radoElementAgb = document.getElementById("agb");

  if (!radoElementAgb.checked) {
    document.getElementById("agbFehlemeldung").innerText = "Bitte Ausfüllen";
    return false;
  } else {
    document.getElementById("agbFehlemeldung").innerText = "Cool";
    return true;
  }
}
function validateAnnulirung() {
  let radoElementJa = document.getElementById("jaVersicherung");
  let radoElementNein = document.getElementById("neinVersicherung");

  if (!(radoElementJa.checked || radoElementNein.checked)) {
    document.getElementById("versicherungFehlemeldung").innerText =
      "Bitte Ausfüllen";
    return false;
  } else {
    let radioButtons = document.getElementsByName("versicherung");
    let value;

    for (let b = 0; b < radioButtons.length; ++b) {
      let button = radioButtons[b];

      if (button.checked) {
        value = button.value;
        break;
      }
    }
    document.getElementById("versicherungFehlemeldung").innerText =
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
function sonderzeichenDo(start, stop, value, toDo, id) {
  console.log("sonderzeichenDo");
  for (let z = start; z < stop; ++z) {
    if (value.indexOf(zeichensatz[z]) === -1) {
      document.getElementById(id).innerText =
        "Es " + toDo + zeichensatz[z] + ") enthalten!";
      return false;
    }
  }
  return true;
}

/* Sprünge */
function jump(etikette) {
  var url = location.href;
  location.href = "#" + etikette;
  history.replaceState(null, null, url);
}
/* Diealeckte */
// noch mal anschauen mit Chriss
function mensch() {
  let mensch = document.getElementById("menschKurssprache");
  if (!mensch.checket) {
    alert("Mensch schaltet ein");
    gemeinesprache = document.getElementById("gemeinespracheKurssprache");
    if (!Gemeinesprache.checked) {
      alert("gemeinesprache ist aus");
      Gemeinesprache = true;
    }
  }
}
/* funktionen für Rüchkgabe page */
