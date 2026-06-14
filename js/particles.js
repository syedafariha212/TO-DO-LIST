document.addEventListener(
"mousemove",
(e)=>{

const circle =
document.createElement("div");

circle.classList.add("particle");

circle.style.left =
e.pageX + "px";

circle.style.top =
e.pageY + "px";

document.body.appendChild(circle);

setTimeout(()=>{
circle.remove();
},500);

});
