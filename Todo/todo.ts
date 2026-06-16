
// Define an array to hold tasks
let task: string[] = [];

// Generate HTML for each task
function displayTask() {
    let html: string = "";

    for (let i = 0; i < task.length; i++) {
        html += `<li>${task[i]} <button onclick="deleteTask(${i})">Delete</button></li>`;
    }
    const listElement = document.getElementById("list") as HTMLElement | null;
    if (listElement) {
        listElement.innerHTML = html;
    }
}

// Function to add a task
const addTask = () => {
    let taskInput = document.getElementById("task") as HTMLInputElement | null;
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
const deleteTask = (index: number) => {
    task.splice(index, 1);
    displayTask();
};

const btn = document.getElementById("add-btn") as HTMLElement | null;
const clearBtn = document.getElementById("clear-all") as HTMLElement | null;
clearBtn?.addEventListener("click", () => {
    task = [];
    displayTask();
});
btn?.addEventListener("click", addTask);
