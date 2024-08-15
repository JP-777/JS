let user;

window.onload = function() {
    user = prompt("Enter your name");
    writer(user);
};

function writer(user) {
    console.log(user);
    const greet = "Hello and " + determineTime() + " my dear friend " + user;
    document.getElementById("greet").textContent = greet;
}

function determineTime() {
    const time = new Date();
    const hour = time.getHours();
    
    if (hour <= 12) {
        document.getElementById("container").style.borderColor = "blue";
        changeFontSize(10);
        return "good morning";
    } else if (hour <= 18) {
        document.getElementById("container").style.borderColor = "orange";
        changeFontSize(20);
        return "good afternoon";
    } else {
        document.getElementById("container").style.borderColor = "purple";
        changeFontSize(5);
        return "good evening";
    }
}

function changeFontSize(size) {
    document.getElementById("greeter").style.fontSize = size + "px";
    document.getElementById("greet").style.fontSize = size + "px";
}
