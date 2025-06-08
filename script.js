const sentences = [
    "I love to learn python",
    "Welcome to the typing speed tester",
    "Practice makes perfect!",
    "Typing fast is fun and useful."
];

let startTime, endTime;
let currentSentence = "";

function startTyping() {
    // Pick a random sentence
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById("typingArea").style.display = "block";
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").placeholder = "Type the sentence here...";
    document.getElementById("userInput").disabled = false;
    document.getElementById("userInput").focus();
    document.getElementById("result").innerHTML = "";
    document.getElementById("sentence").innerText = currentSentence;
    startTime = new Date().getTime();
}

// Called when Done button is pressed
function checkTyping() {
    endTime = new Date().getTime();
    const userInput = document.getElementById("userInput").value;
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

    if (userInput.trim() === currentSentence) {
        const words = currentSentence.split(" ").length;
        const wpm = ((words / timeTaken) * 60).toFixed(2);
        document.getElementById("result").innerHTML =
            `<span style="color:green;">✅ Correct!</span> <br/>Time taken: ${timeTaken} seconds<br/>Your typing speed: ${wpm} WPM`;
    } else {
        document.getElementById("result").innerHTML =
            `<span style="color:red;">❌ Incorrect sentence. Please try again!</span>`;
    }
}
