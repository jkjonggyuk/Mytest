const clockContainer = document.querySelector(".js-clock");
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    /**********************MINI IF****************************************/
    // `${condition ? `expr1` : `expr2`}    //hours === `${hours}`
    clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${
        minutes<10 ? `0${minutes}` : minutes}:${
        seconds<10 ? `0${seconds}` : seconds}`;
    /*********************************************************************/

}

function init(){
    getTime();
    setInterval(getTime, 1000); // call getTime every 1000ms(1sec)

}

init();