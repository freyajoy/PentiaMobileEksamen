# PentiaMobileEksamen
eksamen 2 sem

chat-gpt prompts og svar:


Prompt: hvordan spejlvender jeg svg-fil i css

Svar: For at spejlvende en SVG-fil (eller ethvert andet HTML-element) i CSS, kan du bruge CSS-transformationsejendommen transform sammen med scaleX eller scaleY. Her er hvordan du kan gøre det: 
.my-svg {
    transform: scaleX(-1);
}

.my-svg {
    transform: scaleY(-1);
}


Prompt: hvordan indsætter jeg en video i min html

Svar: For at indsætte en video i din HTML kan du bruge <video>-tagget. Her er en grundlæggende vejledning til, hvordan du gør dette:
Grundlæggende HTML-struktur
Du kan bruge følgende HTML-kode for at inkludere en video på din webside:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Eksempel</title>
</head>
<body>
    <video controls>
        <source src="path/to/your/video.mp4" type="video/mp4">
        Din browser understøtter ikke HTML5-video.
    </video>
</body>
</html>


Prompt: hvordan kan jeg ændrer denne kode, så siden ikke reloader når jeg trykker på knappen? 
function myFunction() {
    document.getElementById("dropdown-header").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

Svar: For at sikre, at siden ikke genindlæses, når du trykker på knappen, skal du forhindre standardhandlingen for knappen. Dette kan gøres ved at bruge event.preventDefault() i din funktion, der håndterer knappens klik. Hvis knappen er en <button> eller et <a>-element, skal du sørge for, at standardhandlingen, som kan inkludere at indsende en formular eller følge et link, ikke sker.

Her er den ændrede kode:
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Tilføj nogle enkle stilarter for at demonstrere */
    .dropdown-content {
      display: none;
    }

    .dropdown-content.show {
      display: block;
    }
  </style>
  <title>Dropdown Eksempel</title>
</head>
<body>
  <button class="dropbtn" onclick="myFunction(event)">Skift Dropdown</button>
  <div id="dropdown-header" class="dropdown-content">
    <p>Dropdown indhold</p>
  </div>

  <script>
    function myFunction(event) {
      event.preventDefault(); // Forhindrer standardhandlingen
      document.getElementById("dropdown-header").classList.toggle("show");
    }

    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  </script>
</body>
</html>
I denne kode forhindrer event.preventDefault() standardhandlingen, så siden ikke genindlæses, når du klikker på knappen. Resten af koden håndterer dropdown-funktionaliteten som tidligere.