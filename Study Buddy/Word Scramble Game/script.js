const words = ["javascript", "developer", "coding", "programmer", "html", "css"];
let currentWord = "";
let scrambledWord = "";

function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

function scrambleWord(word) {
    const scrambled = word.split('');
    for (let i = scrambled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
    }
    return scrambled.join('');
}

function displayScrambledWord() {
    const scrambledElement = document.getElementById("scrambled-word");
    scrambledElement.classList.add("fade-out");
    setTimeout(() => {
        scrambledElement.textContent = scrambledWord;
        scrambledElement.classList.remove("fade-out");
        scrambledElement.classList.add("fade-in");
    }, 500);
}

function checkGuess() {
    const guess = document.getElementById("guess-input").value;
    const result = document.getElementById("result");

    if (guess === currentWord) {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Try again!";
        result.style.color = "red";
    }
}

function nextWord() {
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    displayScrambledWord();
    document.getElementById("guess-input").value = "";
    document.getElementById("result").textContent = "";
}

// Array methods demonstration

function demoArrayMethods() {
    const array = ["javascript", "developer", "coding", "programmer", "html", "css"];

    // indexOf
    const index = array.indexOf("coding");
    console.log(`Index of "coding": ${index}`);

    // lastIndexOf
    array.push("coding");
    const lastIndex = array.lastIndexOf("coding");
    console.log(`Last index of "coding": ${lastIndex}`);

    // splice
    const removedItems = array.splice(index, 1);
    console.log(`Removed items: ${removedItems}`);
    console.log(`Array after splice: ${array}`);
}

window.onload = function() {
    nextWord();
    demoArrayMethods();
}
