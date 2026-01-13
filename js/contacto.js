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

//CONTACTOS:
const contactos = [
    {
        id: 1,
        nombre: "Juan Pérez",
        telefono: "5555-1234",
        correo: "juan@gmail.com",
        favorito: false
    },
    {
        id: 2,
        nombre: "María López",
        telefono: "5555-5678",
        correo: "maria@gmail.com",
        favorito: true
    },
    {
        id: 3,
        nombre: "Carlos Gómez",
        telefono: "5555-9012",
        correo: "carlos@gmail.com",
        favorito: false
    }
];

const listaContacto=document.querySelector(".contactos-lista");

function renderizarContactos(lista) {
    listaContactos.innerHTML = "";
    lista.forEach(contacto => {
        const card = document.createElement("article");
        card.classList.add("contacto-card");

        card.innerHTML = `
            <div class="contacto-info">
                <h3>${contacto.nombre}</h3>
                <p>${contacto.telefono}</p>
                <p>${contacto.correo}</p>
            </div>

            <div class="contacto-acciones">
                <button class="btn-icono favorito" title="Favorito">
                    <i class="fa-solid fa-heart"></i>
                </button>

                <button class="btn-icono eliminar" title="Eliminar">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        listaContactos.appendChild(card);
    });
}

renderizarContactos(contactos);