function buttoncheck()
{

    let username = document.getElementById("username").valeu;
    let user = "hendrik";
    
    if( "hendrik" = username){
        console.log("Willkommen");
    } else{
        alert("error");
    }

    let password = document.getElementById("password").valeu;
    let pass = 100; 

    if(pass == password){
        console.log("hallo");
    } else{
        console.log("ne digga");
    }

}

document.getElementById("buttoncheck").addEventListener("click", buttoncheck);