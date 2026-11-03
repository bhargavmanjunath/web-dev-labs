"use strict";
// Bhargav M — Lab 11
// ZIP Code Validation
const zipInput = document.querySelector("#zip");
const zipPattern = /^\d{5}$/;
if (zipInput) {
    zipInput.addEventListener("input", function () {
        const isValidZip = zipPattern.test(zipInput.value);
        console.log("ZIP:", zipInput.value, "Valid:", isValidZip);
    });
}
// Lab 7 — Variables and Data Types
console.log("TypeScript is connected");
const studentName = "Ada";
let labsCompleted = 6;
const isEnrolled = false;
labsCompleted++;
console.log(`${studentName} has completed ${labsCompleted} labs.`);
const count = 5;
const total = `You have ${count} items`;
console.log(total);
// Lab 10 — Like Counter with localStorage
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");
const LikeCounter = {
    likes: Number(localStorage.getItem("likes")) || 0,
    increment() {
        this.likes = this.likes + 1;
        localStorage.setItem("likes", this.likes.toString());
        this.render();
    },
    render() {
        if (likeCount) {
            likeCount.textContent = `${this.likes} likes`;
        }
        if (likeMessage) {
            if (this.likes >= 10) {
                likeMessage.textContent = "Wow, thanks for all the likes!";
            }
            else if (this.likes >= 5) {
                likeMessage.textContent = "Glad you like it!";
            }
            else {
                likeMessage.textContent = "";
            }
        }
    }
};
LikeCounter.render();
if (likeBtn) {
    likeBtn.addEventListener("click", function () {
        LikeCounter.increment();
    });
}
// Lab 10 — Dark Mode with localStorage
const themeBtn = document.querySelector("#theme-btn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}
else {
    document.body.classList.remove("dark");
}
if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        }
        else {
            localStorage.setItem("theme", "light");
        }
    });
}
// Lab 8 — Typed Arrays and Loops
const goals = ["HTML", "CSS", "JavaScript", "Git"];
const goalsList = document.querySelector("#goals-list");
if (goalsList) {
    goals.forEach(function (goal) {
        const item = document.createElement("li");
        item.textContent = goal;
        goalsList.appendChild(item);
    });
}
// Lab 9 — Promises
function getGreetingAfterDelay() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello from the future!");
        }, 800);
    });
}
// Lab 9 — Async/Await
async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}
showGreeting();
// Lab 9 — Fetching Real Data from API
document.addEventListener("DOMContentLoaded", function () {
    const factBtn = document.querySelector("#fact-btn");
    const factDisplay = document.querySelector("#fact-display");
    async function loadFact() {
        if (!factDisplay)
            return;
        factDisplay.textContent = "Loading...";
        try {
            const response = await fetch("https://catfact.ninja/fact");
            if (!response.ok) {
                throw new Error("Server responded with an error");
            }
            const data = (await response.json());
            factDisplay.textContent = data.fact;
        }
        catch (error) {
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
    console.time("sequential");
    const a = await (await fetch(url)).json();
    const b = await (await fetch(url)).json();
    console.timeEnd("sequential");
    console.time("concurrent");
    const [respA, respB] = await Promise.all([
        fetch(url),
        fetch(url)
    ]);
    const c = await respA.json();
    const d = await respB.json();
    console.timeEnd("concurrent");
}
compareFetchTiming().catch(console.error);
// Lab 10 — Geolocation API
const locationBtn = document.querySelector("#location-btn");
const locationDisplay = document.querySelector("#location-display");
if (locationBtn && locationDisplay) {
    locationBtn.addEventListener("click", function () {
        if (!("geolocation" in navigator)) {
            locationDisplay.textContent = "Geolocation isn't supported.";
            return;
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            locationDisplay.textContent = `You're near ${lat}, ${lon}`;
        }, function (error) {
            locationDisplay.textContent = "Location access was denied.";
            console.warn(error);
        });
    });
}
else {
    console.warn("Location elements not found on this page.");
}
// Lab 11 — Graduate Extension: Generic Functions
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
}
// Test 1 — Number
saveToStorage("lab11Likes", 5);
const savedLikes = loadFromStorage("lab11Likes");
console.log("Graduate Test 1 - Number:", savedLikes);
// Test 2 — CatFact object
const exampleFact = {
    fact: "Cats sleep many hours each day.",
    length: 31
};
saveToStorage("lastFact", exampleFact);
const savedFact = loadFromStorage("lastFact");
console.log("Graduate Test 2 - CatFact:", savedFact);
