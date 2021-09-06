//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



/*/function go(){

if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
        document.form.submit(); 
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
} */

function verificar(){
    let nombre = document.getElementById("usuario");
    let email = document.getElementById("email");
    let usuario = {};
    if (nombre.value.trim()===""|| email.value.trim()===""){
    alert("Completa los campos por favor");
}else {
    usuario.nombre = nombre.value;
    usuario.email = email.value;
    usuario.estado = "conectado";
    location.href="index.html";
    localStorage.setItem("usuario",JSON.stringify(usuario));
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
}
}

