function buttoncheck(){
    let age = document.getElementById("ageNumber").value;
    let password = document.getElementById("password").value;
    let pass = 10;

    if(age>= 12 , pass==password){
        console.log("Willkommen");
    } else {
        alert("error");
    }
} 
       /* let password = document.getElementById("password").value;
         let pass = 10;
      
          if(pass == password){
                 console.log("Willkommen");
          } else {
                alert("Falsches password");
          }
      }

        function buttonexposed() {
        if (!buttoncheck == true) {
            window.open("C:\Users\Katja\Downloads\PortableGit\share\gtk-doc\html\p11-kit\index.html");
        } else{
            alert("alles falsch");
            return false;
        }
      }*/



    document.getElementById("buttoncheck").addEventListener("click", buttoncheck);
    document.getElementById("buttoncheckpas").addEventListener("click",buttoncheckpas);
