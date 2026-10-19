// Bhargav M — Lab 9

const zipInput = document.getElementById("zip");

const zipPattern = /^\d{5}$/;

zipInput.addEventListener("input", function () {
    const isValidZip = zipPattern.test(zipInput.value);
    console.log("ZIP:", zipInput.value, "Valid:", isValidZip);
});

// Lab 7 — Part 1
console.log("script.js is connected");

// Lab 7 — Part 2: Variables and Data Types

const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;

console.log(`${name} has completed ${labsCompleted} labs.`);

// Lab 7 — Part 2: ES5 vs ES6+

const count = 5;
const total = `You have ${count} items`;

console.log(total);

// Lab 7 — Part 3: Like Button

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");


 // Lab 8 — Graduate Extension

function updateLikeDisplay(count) {
    likeCount.textContent = `${count} likes`;

    if (count >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
    } else if (count >= 5) {
        likeMessage.textContent = "Glad you like it!";
    } else {
        likeMessage.textContent = "";
    }
}

function createLikeCounter() {
    let likes = 0;

    return {
        increment() {
            likes++;
            updateLikeDisplay(likes);
        },

        getLikes() {
            return likes;
        }
    };
}

const counter = createLikeCounter();

if (likeBtn) {
    likeBtn.addEventListener("click", function() {
        counter.increment();
    });
} else {
    console.warn("like-btn not found on this page");
}


                 
// Lab 7 — Part 4: Dark Mode

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});


 // Lab 8 — Part 2: Arrays and Loops

const goals = ["HTML", "CSS", "JavaScript", "Git"];

const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
});


// Lab 9 — Part 2: Promises

function getGreetingAfterDelay() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello from the future!");
        }, 800);
    });
}


// Lab 9 — Part 3: Async/Await

async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}

showGreeting();


// Lab 9 — Part 4: Fetching Real Data from an API

document.addEventListener("DOMContentLoaded", function() {

    const factBtn = document.querySelector("#fact-btn");
    const factDisplay = document.querySelector("#fact-display");

    async function loadFact() {
        factDisplay.textContent = "Loading...";

        try {
            const response = await fetch("https://catfact.ninja/fact");

            if (!response.ok) {
                throw new Error("Server responded with an error");
            }

            const data = await response.json();
            factDisplay.textContent = data.fact;

        } catch (error) {
            factDisplay.textContent =
                "Couldn't load a fact right now. Try again.";

            console.error(error);
        }
    }

    if (factBtn && factDisplay) {
        factBtn.addEventListener("click", loadFact);
    }

});


// Lab 9 — Graduate Extension: Promise.all()

async function compareFetchTiming() {

    const url = "https://catfact.ninja/fact";

    // Sequential requests
    console.time("sequential");

    const a = await (await fetch(url)).json();
    const b = await (await fetch(url)).json();

    console.timeEnd("sequential");

    // Concurrent requests
    console.time("concurrent");

    const [respA, respB] = await Promise.all([
        fetch(url),
        fetch(url)
    ]);

    const c = await respA.json();
    const d = await respB.json();

    console.timeEnd("concurrent");
}

compareFetchTiming();
