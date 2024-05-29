
//Her erklæres funktionen "dropdown", med et event som parameter. 
//Eventet bruger metoden "preventDefault", hvilket gør at siden ikke reloader når der trykkes på knappen.
//Inde i funktionen referere du til DOM'en (objekterne i HTML'en) og bruger metoden "getElementById", som går ind og finder elementet med ID'et "dropdown-header".
//Derefter bruges propertien "classList", samt metoden "toggle", for at kontrollerer om elementet har klassen "show".
function dropdown(event) {
    event.preventDefault();
    document.getElementById("dropdown-header").classList.toggle("show");
  }

//Denne første linje af kode gør, at dropdown-menuen lukkes når man klikker på hvor som helst på browser-vinduet.
//Så dvs. når man kligger på vinduet bliver denne funktion udført. Funktionen er anonym og har derfor ikke noget navn.
//Den næste sætning er en "if-sætning", som gør at funktionen bliver udført, hvis man ikke trykker på et element med klassen "dropbtn".
//udråbstegnet er et sammenligningsoperator, der bruges til at udskrive det modsatte af hvad der står.
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      //Inde i if-sætningen erklæres to variabler: "dropdowns" (som går ind i DOM'en og finder alle elementer med klassen "dropdown-content") og variablet "i".
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      //Derefter bruges et for-loop for at udskrive variablet "dropdowns", altså indholdet i vores dropdown.
      //Inde loopet sættes "i" til at være 0, hvorefter loopet bliver sat til at køre, hvis altså længden af "dropdowns" er mere end 0.
      //Inde i loopet, bliver der erklæret variablet "openDropdown", som indeholder vores array af indhold i dropdown-menuen. Her bruges "i" altså som en tæller.
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        //Denne sidste if-sætning bruges til at kontrolerer om "openDropdown" har klassen "show", og har den det bliver den fjernet.
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }