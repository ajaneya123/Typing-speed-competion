// Sentence pool for randomness (optional, can keep just one sentence)
const sentences = [
  "I love to learn python",
  "JavaScript is a powerful language",
  "Practice makes perfect",
  "Typing fast is a useful skill",
  "GitHub helps developers collaborate"
];

let sentence = "";
let startTime = null;

function startTyping() {
  // Pick a random sentence
  sentence = sentences[Math.floor(Math.random() * sentences.length)];

  document.getElementById("typingArea").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("userInput").value = "";
  document.getElementById("sentenceToType").innerText = sentence;
  startTime = new Date();
  document.getElementById("checkBtn").disabled = false; // Enable button if disabled
}

function checkTyping() {
  if (!startTime) {
    document.getElementById("result").innerHTML = "<p class='wrong'>❌ Please start the test first! ❌</p>";
    return;
  }

  const endTime = new Date();
  const typed = document.getElementById("userInput").value;
  const timeTaken = Math.max((endTime - startTime) / 1000, 0.01).toFixed(2);

  // Count words in user input for WPM calculation
  const wordsTyped = typed.trim().split(/\s+/).filter(Boolean).length;
  const wpm = ((wordsTyped / timeTaken) * 60).toFixed(2);

  // More forgiving accuracy check
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
  document.getElementById("checkBtn").disabled = true; // Disable button to prevent double submissions
}
