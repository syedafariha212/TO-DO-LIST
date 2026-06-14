function checkAchievements() {

    const completed =
    tasks.filter(
    t=>t.completed
    ).length;

    const badge =
    document.getElementById("badge");

    if(completed>=1){
        badge.innerHTML=
        "🏆 First Task Completed";
    }

    if(completed>=10){
        badge.innerHTML=
        "🔥 Productivity Master";
    }

    if(completed>=25){
        badge.innerHTML=
        "👑 Task Champion";
    }
}
