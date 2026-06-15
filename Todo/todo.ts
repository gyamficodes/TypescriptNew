let task: (string)[] = [];

let btn = document.getElementById("add-btn") as HTMLElement | null;


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

}


btn?.addEventListener("click", addTask);






