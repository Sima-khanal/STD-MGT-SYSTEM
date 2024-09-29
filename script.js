const quotes = [
  "Empowering students to achieve their goals.",
  "Together we shape the future.",
  "Education is the key to success.",
  "Every student can be a star."
];

let currentQuoteIndex = 0;

function changeQuote() {
  const quoteElement = document.getElementById("quote");
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  quoteElement.textContent = quotes[currentQuoteIndex];
}

// Change quote every 10 seconds
setInterval(changeQuote, 10000);

// Initialize the first quote
changeQuote();
