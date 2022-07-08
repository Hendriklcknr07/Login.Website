

function buttoncheck(){
    let age = document.getElementById("ageNumber").value;

    if(age>= 12){
        console.log("Willkommen");
    } else {
        console.log("tüs");
    }
    
}


document.getElementById("buttoncheck").addEventListener("click", buttoncheck);