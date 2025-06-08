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
  sentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("typingArea").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("userInput").value = "";
  document.getElementById("sentenceToType").innerText = sentence;
  startTime = new Date();
  document.getElementById("checkBtn").disabled = false;
  // Optional: Disable start button if needed
  // document.getElementById("startBtn").disabled = true;
}

// Prevent form submission on Enter key in the input field
document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("checkBtn").click();
  }
});

function checkTyping() {
  if (!startTime) {
    document.getElementById("result").innerHTML = "<p class='wrong'>❌ Please start the test first! ❌</p>";
    return;
  }

  const endTime = new Date();
  const typed = document.getElementById("userInput").value;
  if (!typed.trim()) {
    document.getElementById("result").innerHTML = "<p class='wrong'>❌ Please type the sentence above before checking! ❌</p>";
    return;
  }
  const timeTaken = Math.max((endTime - startTime) / 1000, 0.01).toFixed(2);

  const wordsTyped = typed.trim().split(/\s+/).filter(Boolean).length;
  const wpm = ((wordsTyped / timeTaken) * 60).toFixed(2);

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

  startTime = null;
  document.getElementById("checkBtn").disabled = true;
  // Optional: Enable start button for another try
  // document.getElementById("startBtn").disabled = false;
}
