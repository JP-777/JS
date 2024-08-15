const circle =document.getElementById("circle");
const backgroundColorCircle = window.getComputedStyle(circle).backgroundColor;

function changeColor(event) {
    const element = event.target; 
    const borderColor = window.getComputedStyle(element).borderColor;
    element.style.backgroundColor = borderColor; 
}

function rechangeColor(event){
    const element = event.target;
    element.style.backgroundColor = backgroundColorCircle;
}