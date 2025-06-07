const sentence = "I love to learn python";
let startTime;

function startTyping() {
  document.getElementById("typingArea").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("userInput").value = "";
  startTime = new Date();
}

function checkTyping() {
  const endTime = new Date();
  const typed = document.getElementById("userInput").value;
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

  const result = document.getElementById("result");
  const words = sentence.split(" ").length;
  const wpm = ((words / timeTaken) * 60).toFixed(2);

  let accuracyMessage = "";
  if (typed.trim() === sentence) {
    accuracyMessage = `<p class="correct">✅ The sentence you typed is correct ✅</p>`;
  } else {
    accuracyMessage = `<p class="wrong">❌ Oops, the sentence you typed is wrong ❌</p>`;
  }

  result.innerHTML = `
    <p>⏱️ Time taken: ${timeTaken} seconds</p>
    ${accuracyMessage}
    <p>💨 Your typing speed: ${wpm} words per minute (WPM)</p>
  `;
}
