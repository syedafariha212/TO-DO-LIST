const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Small progress is still progress.",
    "Discipline beats motivation.",
    "Focus on being productive, not busy.",
    "Dream big. Start small. Act now.",
    "Consistency creates results."
];

function loadQuote() {

    const random =
    Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
    quotes[random];
}

loadQuote();
