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
