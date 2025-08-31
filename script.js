// ===== PART 1: VARIABLES AND CONDITIONALS =====

// Variable declarations
let userName = "John";
const userAge = 25;
var isStudent = true;

// Conditional example
if (userAge >= 18) {
    document.getElementById("output1").textContent = `${userName} is an adult.`;
} else {
    document.getElementById("output1").textContent = `${userName} is a minor.`;
}

// ===== PART 2: CUSTOM FUNCTIONS =====

// Function 1: Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// Function 2: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

// Event listeners for function buttons
document.getElementById("btn1").addEventListener("click", function() {
    const area = calculateArea(5, 8);
    document.getElementById("output2").textContent = `The area is: ${area}`;
});

document.getElementById("btn2").addEventListener("click", function() {
    const greeting = greetUser(userName);
    document.getElementById("output2").textContent = greeting;
});

// ===== PART 3: LOOPS =====

// Loop 1: For loop
document.getElementById("btn3").addEventListener("click", function() {
    let output = "Counting: ";
    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    document.getElementById("output3").textContent = output;
});

// Loop 2: For...of loop
document.getElementById("btn4").addEventListener("click", function() {
    const colors = ["red", "green", "blue"];
    let output = "Colors: ";
    for (const color of colors) {
        output += color + " ";
    }
    document.getElementById("output3").textContent = output;
});

// ===== PART 4: DOM INTERACTIONS =====

// DOM Interaction 1: Change background color
document.getElementById("btn5").addEventListener("click", function() {
    document.body.classList.toggle("blue-bg");
});

// DOM Interaction 2: Add list item
document.getElementById("btn6").addEventListener("click", function() {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent = "New item added at " + new Date().toLocaleTimeString();
    list.appendChild(newItem);
});

// DOM Interaction 3: Toggle text visibility
document.getElementById("btn7").addEventListener("click", function() {
    const text = document.getElementById("toggledText");
    text.classList.toggle("hidden");
});