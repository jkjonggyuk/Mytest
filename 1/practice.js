/*
const title = document.getElementById("title");
console.log(title);
title.innerHTML = "now chaged!";//modify H1
title.style.color = "red";  //modify H1
console.dir(document);
document.title = 'Hello from the other side'; //title change
*/

//const title = document.querySelector("#title");
//const BASE_COLOR = "rgb(52, 73, 94)";   // can now delete css modification
//const OTHER_COLOR = "#7f8c8d";
//function handleResize(){
//    console.log(event);
//}
//window.addEventListener("resize", handleResize); //interesting... NOT handleResize() but handleResize
/*
function handleClick() {
    title.style.color = 'red';
}
window.addEventListener("click", handleClick);
/*
const age = prompt("How old are you?");
//console.log(age);
if(age >= 18 && age =< 21){
    console.log("you may drink but you shouldn't");
} else {
    console.log("you can't drink");
}

function handleClick() {
    console.log("click");
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR; 
    console.log("init");
    title.addEventListener("click", handleClick); //mouseenter also available
}
init();

//******************* ALWAYS USE MDN event reference
//window.addEventListener("online", handleonline); also avail.
//window.addEventListener("offline", handleoffline);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
/*
function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else{
        title.className = "";
    }  
}
function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}
*/
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();