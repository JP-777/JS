const buttonDelete = document.querySelector("#buttonDelete");
buttonDelete.addEventListener("click", deleteContent);

const buttonValid = document.querySelector("#button");
buttonValid.addEventListener("click", getData);

function deleteContent(){
    const usser = document.getElementById("Usser");
    const password = document.getElementById("Password");
    usser.value="";
    password.value="";
}

function getData(){
    const form = document.forms["validator"];
    const data = [];
    for (let element of form){
         data.push(element.value);
    }
    console.log(data);
    validatePassword(data);
 }

 function validatePassword(data){
    const password = data[1];
    const validatePassword = data[2];
    if (password == validatePassword){
        alert("Welcome");
    } else {
        alert("Your password aren't the same");
        deleteContent;
    }
 }