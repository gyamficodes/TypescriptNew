"use strict";
// Define an array to hold tasks
let task = [];
// Generate HTML for each task
function displayTask() {
    let html = "";
    for (let i = 0; i < task.length; i++) {
        html += `<li>${task[i]} <button onclick="deleteTask(${i})">Delete</button></li>`;
    }
    const listElement = document.getElementById("list");
    if (listElement) {
        listElement.innerHTML = html;
    }
}
// Function to add a task
const addTask = () => {
    let taskInput = document.getElementById("task");
    if (!taskInput) {
        return;
    }
    let textInput = taskInput.value;
    if (textInput.trim() !== "") {
        task.push(textInput);
        displayTask();
        taskInput.value = "";
    }
};
// Function to delete a task
const deleteTask = (index) => {
    task.splice(index, 1);
    displayTask();
};
const btn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-all");
clearBtn?.addEventListener("click", () => {
    task = [];
    displayTask();
});
btn?.addEventListener("click", addTask);
//# sourceMappingURL=todo.js.map