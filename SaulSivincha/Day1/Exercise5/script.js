const button =  document.querySelector("#button");
button.addEventListener("click", getData);

const buttonDelete = document.querySelector("#buttonDelete");
buttonDelete.addEventListener("click", deleteContent);

function getData(){
   const form = document.forms["conversor"];
   const data = [];
   for (let element of form){
        data.push(element.value);
   }
   conversor(data);
   console.log(data);
}

function conversor(data){
    let dolar = Number(data[0]);
    let euro = Number(data[1]);
    const textDolars = document.getElementById("Dolars");
    const textEuros = document.getElementById("Euros");
    if (dolar == ""){
        dolar = euro*1.09;
        textDolars.value=dolar;
    } else if (euro == ""){
        euro = dolar/1.09;
        textEuros.value=euro;
    }
}

function deleteContent(){
    const textDolars = document.getElementById("Dolars");
    const textEuros = document.getElementById("Euros");
    textDolars.value="";
    textEuros.value="";
}
