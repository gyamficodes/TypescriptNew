"use strict";
let task = [];
let btn = document.getElementById("add-btn");
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

//# sourceMappingURL=todo.js.map