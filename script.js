//your JS code here. If required.
// script.js

const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");
const startBtn = document.getElementById("startBtn");

const fullText = "We love Programming!";

function runText() {
  const speedValue = Number(speedInput.value);
  if (speedValue < 1 || speedValue > 10) {
    alert("Please enter a speed from 1 to 10");
    return;
  }

  textElement.textContent = ""; // Clear previous text

  let index = 0;
  const intervalTime = 500 / speedValue; // Calculate speed per character

  const interval = setInterval(() => {
    textElement.textContent += fullText[index];
    index++;
    if (index === fullText.length) {
      clearInterval(interval); // Stop when text is fully rendered
    }
  }, intervalTime);
}

startBtn.addEventListener("click", runText);
