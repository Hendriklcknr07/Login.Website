function buttoncheck(){
    let age = document.getElementById("ageNumber").value;

    if(age>= 12){
        console.log("Willkommen");
    } else {
        alert("error");
    }
        
        let password = document.getElementById("password").value;
         let pass = 10;
      
          if(pass == password){
                 console.log("Willkommen");
          } else {
                alert("Falsches password");
          }
      }




    document.getElementById("buttoncheck").addEventListener("click", buttoncheck);
    document.getElementById("buttoncheckpas").addEventListener("click",buttoncheckpas);
