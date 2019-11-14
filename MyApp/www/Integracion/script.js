function otroHTML(){
    var valido = document.getElementById("usuario").value;
    if (valido == ""){
        alert("El campo no puede estar en blanco.");
    }else{
    window.location.href = "perfil.html";
    }
}

function registro(){
    window.location.href = "registro.html";
}

/*De acá para arriba pertenece a index.html*/

function done(){
    var valido = document.getElementById("usuario").value;
    var nickvalido = document.getElementById("nick").value;
    if (valido == "" || nickvalido == ""){
        alert("El campo no puede estar en blanco.");
    }else{
    alert("Nuevo usuario creado con éxito.");
    window.location.href = "index.html";
    }
}

function salir(){
    window.location.href = "index.html";
}

function editarPerfil(){
    window.location.href = "editar.html";
}

function tateti(){
    window.location.href = "ta-te-quieto/index.html";
    
}

function memotest(){
    window.location.href = "Memetest/Memetest/index.html";

}

function pong(){
    window.location.href = "pong/index.html";

}

/*De acá para arriba pertenece a perfil.html*/

function hecho(){
    var valido = document.getElementById("usuario").value;
    var nickvalido = document.getElementById("nick").value;
    if (valido == "" || nickvalido == "") {
        alert("El campo no puede estar en blanco.");
    } else {
        alert("Sus datos han sido guardados con éxito.");
        window.location.href = "index.html";
    }
}

/*De acá para arriba pertenece a editar.html*/