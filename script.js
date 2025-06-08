const sentence = "I love to learn python";
console.log("🧠Welcome to the typing speed tester🧠");
console.log("Type the following sentence:");
console.log(sentence);
console.log("Your time will start when you press Enter key");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Press Enter to start...", () => {
    const startTime = Date.now();

    readline.question("Type here: ", (typed) => {
        const endTime = Date.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

        console.log(`\n⏱️ Time taken: ${timeTaken} seconds`);

        if (typed === sentence) {
            console.log("✅ The sentence you typed is correct ✅");
        } else {
            console.log("❌ Oops, the sentence you typed is wrong ❌");
        }

        const words = sentence.split(" ").length;
        const wpm = ((words / (timeTaken / 60)).toFixed(2));

        console.log(`💨 Your typing speed: ${wpm} words per minute (WPM)`);
        readline.close();
    });
});
