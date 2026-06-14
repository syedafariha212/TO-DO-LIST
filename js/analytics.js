window.addEventListener("load", () => {

    const ctx = document.getElementById("taskChart");

    if (!ctx) return;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = tasks.length - completed;

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Completed", "Pending"],
            datasets: [{
                data: [completed, pending]
            }]
        }
    });

});
