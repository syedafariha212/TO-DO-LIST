let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateStats() {

    const total = tasks.length;

    const completed =
    tasks.filter(task => task.completed).length;

    const pending =
    total - completed;

    const score =
    total === 0
    ? 0
    : Math.round((completed / total) * 100);

    const totalEl =
    document.getElementById("totalTasks");

    const completedEl =
    document.getElementById("completedTasks");

    const pendingEl =
    document.getElementById("pendingTasks");

    const scoreEl =
    document.getElementById("score");

    if(totalEl) totalEl.innerText = total;
    if(completedEl) completedEl.innerText = completed;
    if(pendingEl) pendingEl.innerText = pending;
    if(scoreEl) scoreEl.innerText = score + "%";

    if(typeof checkAchievements === "function"){
        checkAchievements();
    }
}

function renderTasks() {

    const taskList =
    document.getElementById("taskList");

    if(!taskList) return;

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li =
        document.createElement("li");

        li.innerHTML = `
            ${task.text}
            <button onclick="toggleTask(${index})">
                ✔
            </button>
            <button onclick="deleteTask(${index})">
                ❌
            </button>
        `;

        if(task.completed){
            li.style.textDecoration =
            "line-through";
        }

        taskList.appendChild(li);

    });

    updateStats();
}

function addTask() {

    const input =
    document.getElementById("taskInput");

    if(!input) return;

    if(input.value.trim() === ""){
        return;
    }

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

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();
    renderTasks();
}

renderTasks();
updateStats();
