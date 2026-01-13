//llammamos a la funcion como objeto
const usuario = obtenerDatos("usuario");

if (usuario) {
    document.getElementById("perfil-correo").textContent = usuario.correo;
    document.getElementById("perfil-password").textContent = usuario.password;
} else {
    window.location.href = "../index.html";
}