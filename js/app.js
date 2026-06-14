let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task.text}
            <button onclick="toggleTask(${index})">✔</button>
            <button onclick="deleteTask(${index})">❌</button>
        `;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") return;

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";

    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

renderTasks();
function updateStats(){

const total = tasks.length;

const completed =
tasks.filter(t => t.completed).length;

const pending =
total - completed;

const score =
total === 0
? 0
: Math.round((completed/total)*100);

document.getElementById("totalTasks").innerText = total;
document.getElementById("completedTasks").innerText = completed;
document.getElementById("pendingTasks").innerText = pending;
document.getElementById("score").innerText = score + "%";

if(typeof checkAchievements === "function"){
checkAchievements();
}

}
