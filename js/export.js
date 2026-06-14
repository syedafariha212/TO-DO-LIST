function exportCSV() {

    let csv = "Task,Completed\n";

    tasks.forEach(task => {
        csv += `${task.text},${task.completed}\n`;
    });

    const blob = new Blob([csv], {
        type: "text/csv"
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "tasks.csv";

    a.click();
}
