let projektIndex = 1;
visProjekter(projektIndex);

//næste og forrige pile
function plusProjekt(n) {
    visProjekter(projektIndex += n);
}

function visProjekter(n) {
    let i;
    let projekter = document.getElementsByClassName("projekt");
    if (n > projekter.length) {
        projektIndex = 1
    }
    if (n < 1) {
        projektIndex = projekter.length
    }
    for (i = 0; i < projekter.length; i++) {
        projekter[i].style.display = "none";
    }

    projekter[projektIndex-1].style.display = "block";
    
}

// Tilføj click event listener til hver knap
let pileKnapper = document.querySelectorAll(".pile");

for (let i = 0; i < pileKnapper.length; i++) {
    pileKnapper[i].addEventListener("click", function() {
        if (i === 0) {
            // Venstre pil
            plusProjekt(-1);
        } else {
            // Højre pil
            plusProjekt(1);
        }
    });
}
