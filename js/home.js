/* globale varabeln */
let intervalUhr;
let intervalId;
let d = new Date();

let dunkel;

/* funktionen für alle */
/* function writeHaeder(){
 document.getElementById('header').innerHTML = ``;
}
function writeFooter(){
  document.getElementById('footer').innerHTML = ``;
} */
function workInProgress() {
  alert("work in progress");
}
function dark() {
  if ("true" === localStorage.getItem("dunkel")) {
    localStorage.setItem("dunkel", false);
  } else {
    localStorage.setItem("dunkel", true);
  }
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
  dunkel = localStorage.getItem("dunkel");
  if ("true" === localStorage.getItem("dunkel")) {
    document.body.classList.toggle("dark-mode");

    let buttons = document.querySelectorAll(".btn-light");

    for (let b = 0; b < buttons.length; b++) {
      buttons[b].classList.toggle("btn-dark");
    }
  } else {
    localStorage.setItem("dunkel", false);
  }

  intervalUhr = setInterval(updateUhr(), 1000);
}

/* funktionen für home page */

/* funktionen für Formular page */
let zeichensatz = [
  ".", "@", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  // ab da anfassen
  "!", "?", ",", "&", "|", " ", "(", ")", "{", "}", "[", "]",
  "*", "^", ":", ";", "ç", "§", "°", "~", "#", "¼", "½", "¬",
  "¢", "´", "`", "\"","<", ">", "\\", "-", "-", "_", "$", "£",
  "+", "-", "/", "ł", "€", "¶", "ŧ", "←", "↓", "→", "œ", "þ",
  "è", "à", "¨", "æ", "ß", "ð", "đ", "ŋ", "ħ", "ˀ", "ĸ", "ł",
  "«", "»", "¢", "“", "─", "·"
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
  if (!validateAnnulirung()) return false;
  if (!validateAgb()) return false;

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
    localStorage.setItem("Anrede", value);
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
    localStorage.setItem("Vorname", value);
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
    localStorage.setItem("Nachname", value);
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
    localStorage.setItem("Age", value);
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
    !sonderzeichenDoOr(2, 12, value, "muss ein (", "strasseFehlemeldung")
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
    localStorage.setItem("Strasse", value);
    return true;
  }
}
function validatePlz() {
  let inputElement = document.getElementById("plz");
  let value = inputElement.value;

  if (!value) {
    document.getElementById("plzFehlemeldung").innerText = "Bitte Ausfüllen";
    jump("plzFehlemeldung");
    return false;
  } else if (value < 1000 || value > 9000) {
    document.getElementById("plzFehlemeldung").innerText =
      "PLZ Existiert nicht.";
    jump("plzFehlemeldung");
    return false;
  } else {
    document.getElementById("plzFehlemeldung").innerText = value;
    localStorage.setItem("PLZ", value);
    return true;
  }
}
function validateOrt() {
  let inputElement = document.getElementById("ort");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("ortFehlemeldung").innerText = "Bitte Ausfüllen";
    jump("ortFehlemeldung");
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
    jump("ortFehlemeldung");
    return false;
  } else {
    document.getElementById("ortFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    localStorage.setItem("Ort", value);
    return true;
  }
}
function validateEmail() {
  let inputElement = document.getElementById("eMail");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("eMailFehlemeldung").innerText = "Bitte Ausfüllen";
    jump("eMailFehlemeldung");
    return false;
  } else if (
    !sonderzeichenDont(
      12,
      zeichensatz.length,
      value,
      "darf kein (",
      "eMailFehlemeldung"
    )
  ) {
    jump("eMailFehlemeldung");
    return false;
  } else if (!sonderzeichenDo(0, 2, value, "muss ein (", "eMailFehlemeldung")) {
    jump("eMailFehlemeldung");
    return false;
  } else {
    document.getElementById("eMailFehlemeldung").innerText =
      "du hast " + value + " ausgefult";
    localStorage.setItem("Email", value);
    return true;
  }
}
function validateTelM() {
  let inputElement = document.getElementById("telM");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("telMFehlemeldung").innerText = "Bitte ausfüllen";
    jump("telMFehlemeldung");
    return false;
  }
  document.getElementById("telMFehlemeldung").innerText =
    "du hast " + value + " ausgefult";
  localStorage.setItem("TelM", value);

  return true;
}
function validateTelP() {
  let inputElement = document.getElementById("telP");
  let value = inputElement.value;
  if (!value) {
    document.getElementById("telPFehlemeldung").innerText = "Bitte ausfüllen";
    jump("telPFehlemeldung");
    return false;
  }
  document.getElementById("telPFehlemeldung").innerText =
    "du hast " + value + " ausgefult";
  localStorage.setItem("TelP", value);
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
    jump("kursortFehlemeldung");
    return false;
  } else {
    let radioButtons = document.getElementsByName("kursort");
    let value;

    for (let b = 0; b < radioButtons.length; ++b) {
      let button = radioButtons[b];

      if (button.checked) {
        value = button.value;
        localStorage.setItem("Kursort", value);
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

        Kurssprache = "Kurssprache" + b;
        localStorage.setItem(Kurssprache, value);
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
    localStorage.setItem("Uebersetzung", value);
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
    localStorage.setItem("Annulirung", value);
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
function sonderzeichenDoOr(start, stop, value, toDo, id) {
  console.log("sonderzeichenDo");
  for (let z = start; z < stop; ++z) {
    if (value.indexOf(zeichensatz[z]) >= 0) {
      return true;
    }
  }
  document.getElementById(id).innerText =
        "Es " + toDo + "eine zahl" + ") enthalten!";
  return false;
}

/* Sprünge */
function jump(etikette) {
  var url = location.href;
  location.href = "#" + etikette;
  history.replaceState(null, null, url);
}
/* Diealeckte */
// noch mal anschauen mit Chriss / Brandon
function mensch() {
  let mensch = document.getElementById("menschKurssprache");

  if (mensch.checked) {
    gemeinesprache = document.getElementById("gemeinespracheKurssprache");
    if (!gemeinesprache.checked) {
      gemeinesprache.checked = true;
    }
  }

}
/* funktionen für Rüchkgabe page */
function writeConfirmation() {
  let Anrede = localStorage.getItem("Anrede");
  let Fname = localStorage.getItem("Vorname");
  let Name = localStorage.getItem("Nachname");
  let Alter = localStorage.getItem("Nachname");
  let Strasse = localStorage.getItem("Age");
  let plz = localStorage.getItem("Strasse");
  let ort = localStorage.getItem("PLZ");
  let eMail = localStorage.getItem("Ort");
  let telM = localStorage.getItem("Email");
  let telP = localStorage.getItem("TelM");
  let Kursort = localStorage.getItem("TelP");
  let Kurssprache1 = localStorage.getItem("Kursort");
  let Kurssprache2 = localStorage.getItem("Kurssprache1");
  let Kurssprache3 = localStorage.getItem("Kurssprache3");
  let Kurssprache4 = localStorage.getItem("Kurssprache5");
  let Kurssprache5 = localStorage.getItem("Kurssprache7");
  let Kurssprache6 = localStorage.getItem("Kurssprache9");
  let Kurssprache7 = localStorage.getItem("Kurssprache11");
  let Kurssprache8 = localStorage.getItem("Kurssprache13");
  let Kurssprache9 = localStorage.getItem("Kurssprache15");
  let Kurssprache10 = localStorage.getItem("Kurssprache17");
  let Kurssprache11 = localStorage.getItem("Kurssprache19");
  let Kurssprache12 = localStorage.getItem("Kurssprache21");
  let Uebersetzt = localStorage.getItem("Uebersetzung");
  let Annullierungsversicherung = localStorage.getItem("Annulirung");
  document.getElementById(
    "eingebe"
  ).innerHTML = `<h1>Wilkommen ${Name}</h1>
<p>
<span>${Anrede}</span><span>${Fname}</span><br>
<span>Alter:</span><span>${Alter}</span><br>
<span>Adresse:</span><span>${Strasse}</span><br>
<span>${plz}</span><span>${ort}</span><br>
<span>E-Meil:</span><span>${eMail}</span><br>
<span>Tel. M.:</span><span>${telM}</span><br>
<span>Tel.:</span><span>${telP}</span><br>
<span>Kursort:</span><span>${Kursort}</span><br>
<span>Übersetzt in:</span><span>${Uebersetzt}</span><br>
<span>du hast folgende sprachen ausgewält:</span><br>
<span>${Kurssprache1}</span><span>${Kurssprache2}</span><span>${Kurssprache3}</span><span>${Kurssprache4}</span><span>${Kurssprache5}</span><span>${Kurssprache6}</span><span>${Kurssprache7}</span><span>${Kurssprache8}</span><span>${Kurssprache9}</span><span>${Kurssprache10}</span><span>${Kurssprache11}</span><span>${Kurssprache12}</span><br><br>
<span id="Annullierungsversicherung"></span>
</p><script>blabla()</script>`;
}
function blabla() {
  let Annullierungsversicherung = localStorage.getItem("Annulirung");
  if (Annullierungsversicherung === "Ja") {
    document.getElementById("Annullierungsversicherung").innerText =
      "so ne geld verschwendung du bekomms ehnichts";
  } else {
    document.getElementById("Annullierungsversicherung").innerText =
      "Ich will aber nee Spende!";
  }
}
