function buttoncheck(){
    let age = document.getElementById("ageNumber").value;
    let password = document.getElementById("password").value;
    let pass = 10;


    if(age>= 12 , pass==password){
        open("index_in_new.html", "_self");
        } else {
        alert("error");
    }

 }


    document.getElementById("buttoncheck").addEventListener("click", buttoncheck);
