function redirigir(){
    return window.confirm("Estas por redirigirte a la pagina oficial, desea continuar?");
}

function estasseguro(){
    result = window.confirm("Seguro quieres eliminar todo?");
    if (result == true){
        return null;
    } else {
        console.log("Reestablecido")
    }
}

function confirmacion(){
    alert("Consulta enviada con exito.")
}
