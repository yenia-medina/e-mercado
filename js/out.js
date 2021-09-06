
function desconectar(){
    localStorage.clear();
    location.href="login.html";
   
}





document.addEventListener("DOMContentLoaded", function(e){
    let usuario =JSON.parse(localStorage.getItem("usuario"));
    if(usuario !== null){
        document.getElementById("usuario").innerHTML="Bienvenido/a" +" "+ usuario.nombre ;
    }else 
    location.href="login.html";
});

