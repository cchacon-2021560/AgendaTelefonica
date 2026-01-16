/* Lógica para aplicar el fondo de forma aleatoria */
const fondos = [
    "../image/fondo1.jpg",
    "../image/fondo2.jpg",
    "../image/fondo3.jpg",
    "../image/fondo4.jpg",
    "../image/fondo5.jpg"
];

const fondoAleatorio = fondos[Math.floor(Math.random() * fondos.length)];

const contenedor = document.querySelector(".tareas-contenedor");
contenedor.style.backgroundImage = `url(${fondoAleatorio})`;

/* crud */

const listaTareas = document.querySelector(".tareas-lista");

const btnNueva = document.getElementById("btn-nueva-tarea");
const modal = document.getElementById("modal-nueva-tarea");
const cerrar = document.getElementById("cerrar-nueva-tarea");
const guardar = document.getElementById("guardar-tarea");

const inputTitulo = document.getElementById("tarea-titulo");
const inputDescripcion = document.getElementById("tarea-descripcion");
const selectPrioridad = document.getElementById("tarea-prioridad");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let tareaEditando = null;

const form = document.getElementById("form-tarea");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!inputTitulo.value.trim()) return;

    if (tareaEditando !== null) {
        tareas.splice(tareaEditando, 1);
        tareaEditando = null;
    }

    tareas.push({
        titulo: inputTitulo.value,
        descripcion: inputDescripcion.value,
        prioridad: selectPrioridad.value,
        completada: false
    });

    guardarStorage();
    renderizarTareas();

    inputTitulo.value = "";
    inputDescripcion.value = "";
    selectPrioridad.value = "media";

    document.getElementById("titulo-modal").textContent = "Nueva tarea";
    modal.classList.remove("activo");
});


function guardarStorage() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function ordenarTareasPorPrioridad() {
    const orden = { alta: 1, media: 2, baja: 3 };
    tareas.sort((a, b) => orden[a.prioridad] - orden[b.prioridad]);
}

function renderizarTareas() {
    listaTareas.innerHTML = "";
    ordenarTareasPorPrioridad();

    tareas.forEach((tarea, i) => {
        const card = document.createElement("article");
        card.classList.add("tarea-card");

        if (tarea.completada) {
            card.classList.add("completada");
        }

        card.innerHTML = `
            <div class="tarea-info">
                <h3 contenteditable="true" data-i="${i}" class="editar-titulo">
                    ${tarea.titulo}
                </h3>
                <p contenteditable="true" data-i="${i}" class="editar-descripcion">
                    ${tarea.descripcion}
                </p>
                <span class="prioridad ${tarea.prioridad}">
                    ${tarea.prioridad.toUpperCase()}
                </span>
            </div>

            <div class="tarea-acciones">
                <button data-i="${i}" class="btn-icono completar">
                    <i class="fa-solid fa-check-double"></i>
                </button>
                <button data-i="${i}" class="btn-icono editar">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button data-i="${i}" class="btn-icono eliminar">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        listaTareas.appendChild(card);
    });
}

btnNueva.addEventListener("click", () => {
    modal.classList.add("activo");
});

cerrar.addEventListener("click", () => {
    modal.classList.remove("activo");
});

listaTareas.addEventListener("click", (e) => {
    const boton = e.target.closest("button");
    if (!boton) return;

    const i = boton.dataset.i;
    if (i === undefined) return;

    if (boton.classList.contains("editar")) {
        tareaEditando = i;

        inputTitulo.value = tareas[i].titulo;
        inputDescripcion.value = tareas[i].descripcion;
        selectPrioridad.value = tareas[i].prioridad;

        document.getElementById("titulo-modal").textContent = "Editar tarea";
        modal.classList.add("activo");
        return;
    }

    if (boton.classList.contains("eliminar")) {
        tareas.splice(i, 1);
    }

    if (boton.classList.contains("completar")) {
        tareas[i].completada = !tareas[i].completada;
    }

    guardarStorage();
    renderizarTareas();
});

renderizarTareas();