//
const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const usuario = {
        correo: correo,
        password: password
    };

    guardarDatos("usuario", usuario);

    //inicializo
    if(!obtenerDatos("contactos")) {
        guardarDatos("contactos", []);
    }

    if(!obtenerDatos("tareas")) {
        guardarDatos("tareas", []);
    }
    

    window.location.href="html/contacto.html";
})