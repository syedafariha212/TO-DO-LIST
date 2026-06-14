function searchTasks() {

    const value =
    document.getElementById("searchInput")
    .value.toLowerCase();

    const items =
    document.querySelectorAll("#taskList li");

    items.forEach(item => {

        if(
            item.textContent
            .toLowerCase()
            .includes(value)
        ){
            item.style.display="block";
        }else{
            item.style.display="none";
        }

    });
}
