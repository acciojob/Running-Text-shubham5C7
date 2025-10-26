const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");

const fullText = "We love Programming!";

function runText() {
  const speedValue = Number(speedInput.value) || 1; // default 1
  textElement.textContent = ""; // clear previous text

  let index = 0;
  const intervalTime = 500 / speedValue;

  const interval = setInterval(() => {
    textElement.textContent += fullText[index];
    index++;
    if (index === fullText.length) {
      clearInterval(interval);
    }
  }, intervalTime);
}

// Run automatically on page load
window.addEventListener("DOMContentLoaded", runText);

