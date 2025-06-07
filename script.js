const sentence = "I love to learn python";
let startTime = null;

function startTyping() {
  document.getElementById("typingArea").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("userInput").value = "";
  document.getElementById("sentenceToType").innerText = sentence; // Show the sentence
  startTime = new Date();
}

function checkTyping() {
  if (!startTime) {
    document.getElementById("result").innerHTML = "<p class='wrong'>❌ Please start the test first! ❌</p>";
    return;
  }

  const endTime = new Date();
  const typed = document.getElementById("userInput").value;
  const timeTaken = Math.max((endTime - startTime) / 1000, 0.01).toFixed(2); // Avoid zero
  const words = sentence.split(" ").length;
  const wpm = ((words / timeTaken) * 60).toFixed(2);

  // More forgiving accuracy check (case-insensitive, ignores extra spaces)
  const normalize = str => str.trim().replace(/\s+/g, " ").toLowerCase();
  let accuracyMessage = "";
  if (normalize(typed) === normalize(sentence)) {
    accuracyMessage = `<p class="correct">✅ The sentence you typed is correct ✅</p>`;
  } else {
    accuracyMessage = `<p class="wrong">❌ Oops, the sentence you typed is wrong ❌</p>`;
  }

  document.getElementById("result").innerHTML = `
    <p>⏱️ Time taken: ${timeTaken} seconds</p>
    ${accuracyMessage}
    <p>💨 Your typing speed: ${wpm} words per minute (WPM)</p>
  `;

  startTime = null; // Reset so user can't check again without starting
}
