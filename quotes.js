let QuotesIndex = 1;
showQuotes(QuotesIndex);

// Next and previous buttons
function plusQuotes(n) {
    showQuotes(QuotesIndex += n);
}

function showQuotes(n) {
    let i;
    let quotes = document.getElementsByClassName("citat");
    if (n > quotes.length) {
        QuotesIndex = 1
    }
    if (n < 1) {
        QuotesIndex = quotes.length
    }
    for (i = 0; i < quotes.length; i++) {
        quotes[i].style.display = "none";
    }
    quotes[QuotesIndex-1].style.display = "block";
}

// Add click event listeners to each button
let pileKnapper = document.querySelectorAll(".pile");

pileKnapper.forEach((knap, i) => {
    knap.addEventListener("click", function() {
        if (i % 2 === 0) {
            // Left arrow
            plusQuotes(-1);
        } else {
            // Right arrow
            plusQuotes(1);
        }
    });
});