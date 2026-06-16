let task: (string)[] = [];



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


const btn = document.getElementById("add-btn") as HTMLElement | null;

btn?.addEventListener("click", addTask);

const deleteTask = (index: number) => {
    task.splice(index, 1);
    displayTask();
};




