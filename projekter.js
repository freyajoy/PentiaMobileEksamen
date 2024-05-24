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
    // for (i = 0; i < projekter.length; i++) {
    //     projekter[i].classList.remove('vis');
    //     projekter[i].classList.remove('exit');
    // }
    projekter[projektIndex-1].style.display = "block";
    // requestAnimationFrame(() => {
    //     prokter[projekterIndex-1].classList.add('vis');
    // });
    // if (n > 1) {
    //     projekter[projektIndex-2].classList.add('exit');
    // }
}