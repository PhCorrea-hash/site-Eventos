import api from "./api.js";
import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarEventos();

    const inputBusca = document.getElementById("buscar");
    inputBusca.addEventListener("input", manipularBusca);
})

async function manipularBusca() {
    const termoBusca = document.getElementById("buscar").value;
    try {
        const eventosFiltrados = await api.buscarEventoPorTermo(termoBusca);
        ui.renderizarEventos(eventosFiltrados);
    } catch (error) {
        alert("Erro ao realizar busca");
    }
}