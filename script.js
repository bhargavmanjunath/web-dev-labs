// Bhargav M — Lab 7

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

let likes = 0;

likeBtn.addEventListener("click", function() {
    likes = likes + 1;
    likeCount.textContent = `${likes} likes`;
});                   

// Lab 7 — Part 4: Dark Mode

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});