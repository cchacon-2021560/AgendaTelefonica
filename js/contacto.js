
const usuario = obtenerDatos("usuario");
if (!usuario) {
    window.location.href = "../index.html";
}

document.getElementById("perfil-correo").textContent = usuario.correo;
document.getElementById("perfil-password").textContent = usuario.password;


const modalPerfil = document.getElementById("modal-perfil");
const btnPerfil = document.getElementById("btn-perfil");
const cerrarPerfil = document.getElementById("cerrar-perfil");

btnPerfil.addEventListener("click", () => {
    modalPerfil.classList.add("activo");
});

cerrarPerfil.addEventListener("click", () => {
    modalPerfil.classList.remove("activo");
});
