// Bhargav M — Lab 8

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
