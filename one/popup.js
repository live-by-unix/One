const factDisplay = document.getElementById('fact');
const btn = document.getElementById('trigger');

async function fetchRandomFact() {
    factDisplay.style.opacity = '0.5';
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
        const data = await response.json();
        factDisplay.textContent = data.text;
    } catch (error) {
        factDisplay.textContent = "The internet is a bit shy right now. Try again?";
    } finally {
        factDisplay.style.opacity = '1';
    }
}

btn.addEventListener('click', fetchRandomFact);

// Load the first fact automatically
document.addEventListener('DOMContentLoaded', fetchRandomFact);
