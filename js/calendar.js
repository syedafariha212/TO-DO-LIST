function showDate(){

    const today =
    new Date();

    document
    .getElementById("todayDate")
    .innerHTML =
    today.toDateString();

}

showDate();
