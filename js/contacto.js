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

const listaContactos = document.querySelector(".contactos-lista");

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
                <button class="btn-icono favorito ${contacto.favorito ? "activo" : ""}" 
                        data-id="${contacto.id}" 
                        title="Favorito">
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

function alternarFavorito(id) {
    const contacto = contactos.find(c => c.id == id);
    if (contacto) {
        contacto.favorito = !contacto.favorito;
        renderizarContactos(contactos);
    }
}

listaContactos.addEventListener("click", (e) => {
    const botonFavorito = e.target.closest(".favorito");

    if (botonFavorito) {
        const id = Number(botonFavorito.dataset.id);
        alternarFavorito(id);
    }
});


/* Lógica para aplicar el fondo de forma aleatoria */
const fondos = [
    "../image/fondo1.jpg",
    "../image/fondo2.jpg",
    "../image/fondo3.jpg",
    "../image/fondo4.jpg",
    "../image/fondo5.jpg"
];

const fondoAleatorio = fondos[Math.floor(Math.random() * fondos.length)];

const contenedor = document.querySelector(".contactos-contenedor");
contenedor.style.backgroundImage = `url(${fondoAleatorio})`;
