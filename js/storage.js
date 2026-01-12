
//Funciones reutilizables
function guardarDatos(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}

function obtenerDatos(clave) {
    return JSON.parse(localStorage.getItem(clave));
}

function eliminarDatos(clave) {
    localStorage.removeItem(clave);
}
