const firstname = "Emma";
const lastname = "Chrillesen";
const fullname = firstname + " " + lastname; // Concatenation: combining strings together

const myHeight = 1.75;
const number1 = 1;
const number2 = 5;

console.log(myHeight);

console.log(number1 + number2);

console.log(fullname);

console.log(fullname.length);

console.log(fullname.toLowerCase());

const countFoodInFridge = 5;
const doIHaveFood = countFoodInFridge > 0; // Comparison operator: checks if the value is greater than 0
console.log(doIHaveFood);

function handleClick() {
  const count = document.getElementById("count").textContent;
  const newCount = Number(count) + 1; // Convert the count to a number and add 1
  document.getElementById("count").textContent = newCount; // Update the count in the HTML
}
document.getElementById("clickButton").addEventListener("click", handleClick);

// Like Button
document.querySelector("#likeButton").addEventListener("click", function () {
  document.querySelector("#likeButton").classList.toggle("liked");
});

// Show More
document.querySelector("#showButton").addEventListener("click", function () {
  document.querySelector("#moreText").classList.toggle("hidden");
  if (document.querySelector("#moreText").classList.contains("hidden")) {
    document.querySelector("#showButton").textContent = "Show more";
  } else {
    document.querySelector("#showButton").textContent = "Show less";
  }
});

// Todo App

function handleAddTodo() {
  const li = document.createElement("li"); // Opretter et nyt <li> element
  li.textContent = document.getElementById("todotext").value;
  document.getElementById("todos").appendChild(li);
  document.getElementById("todotext").value = ""; // Clear the input field after adding the todo
}
const btnAddTodo = document.getElementById("btnAddTodo");
btnAddTodo.addEventListener("click", handleAddTodo);

document
  .getElementById("todotext")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  });

document.getElementById("todos").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.style.textDecoration = "line-through"; // strike the clicked todo item
  }
});
// Js - objekt
// Samling af data

//objekt
const teacher1 = {
  email: "jrs@ek.dk",
  firstname: "Jeppe",
  lastname: "Stockmar",
};

const teacher2 = {
  email: "kirs@ek.dk",
  firstname: "Christian",
  lastname: "Kirschberg",
};

//.                   teacher er et navn som jeg har valgt her
function printTeacher(teacher) {
  document.getElementById("pTeacher").textContent =
    "Hej " +
    teacher.firstname +
    " " +
    teacher.lastname +
    " din email er " +
    teacher.email +
    " hvis du er for gammel til at huske den";
}

printTeacher(teacher1);

const quiz1 = {
  // skriv et spørgsmål og et svar. 2 Attributter. question og answer
  question1: "What is JavaScript?",
  answer1:
    "JavaScript is a programming language used to create interactive effects within web browsers.",
};
function printQuestion1() {
  document.getElementById("question1").textContent = quiz1.question1;
}

document.querySelector("#btnShow").addEventListener("click", function () {
  document.querySelector("#answer1").classList.toggle("hidden");
  if (document.querySelector("#answer1").classList.contains("hidden")) {
    document.querySelector("#btnShow").textContent = "Show answers";
  } else {
    document.querySelector("#btnShow").textContent = "Hide answers";
  }
});
const quiz2 = {
  question2: "What is a variable in JavaScript?",
  answer2:
    "A variable in JavaScript is a container for storing data values. It can hold different types of data, such as numbers, strings, or objects.",
};
function printQuestion2() {
  document.getElementById("question2").textContent = quiz2.question2;
}
document.querySelector("#btnShow").addEventListener("click", function () {
  document.querySelector("#answer2").classList.toggle("hidden");
  if (document.querySelector("#answer2").classList.contains("hidden")) {
    document.querySelector("#btnShow").textContent = "Show answers";
  } else {
    document.querySelector("#btnShow").textContent = "Hide answers";
  }
});


