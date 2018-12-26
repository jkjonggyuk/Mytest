const form = document.querySelector(".js-form"),
    input = form.querySelector("input"), // => ".js-form input" can also do
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",  //user local storage
    SHOWING_CN = "showing";     //class name

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();     //****************SO COOL***********/
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
    }

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();