import api from "./api.js";

const ui = {
    async renderizarEventos(eventosFiltrados = null) {
        const listaDeEventos = document.getElementById("eventos-lista");
        listaDeEventos.innerHTML = "";

        try {
            let eventosParaRenderizar;

            if (eventosFiltrados) {
                eventosParaRenderizar = eventosFiltrados;
            } else {
                eventosParaRenderizar = await api.buscarEventos();
            }

            if(eventosParaRenderizar.length === 0) {
                alert("Vazio");
            } else {
                eventosParaRenderizar.forEach(ui.adicionarEventoNaLista);
            }

        } catch (error) {
            alert("Erro ao renderizar eventos");
            throw error;
        }
    },

    adicionarEventoNaLista(evento) {
        const listaDeEventos = document.getElementById("eventos-lista");
        const li = document.createElement("li");
        li.classList.add("eventos-lista-item");

        const listaImagem = document.createElement("img");
        listaImagem.src = evento.imagem;
        listaImagem.classList.add("eventos-lista-item_img");

        const itemTitulo = document.createElement("h2");
        itemTitulo.textContent = evento.titulo;
        itemTitulo.classList.add("eventos-lista-item_titulo");

        const itemData = document.createElement("p");
        itemData.textContent = evento.data + ' --- ' + evento.local ;
        itemData.classList.add("eventos-lista-item_data");

        const itemDescricao = document.createElement("p");
        itemDescricao.textContent = evento.descricao;
        itemDescricao.classList.add("eventos-lista-item_descricao");

        const itemLink = document.createElement("a");
        itemLink.textContent = "Acesse o evento aqui"
        itemLink.href = evento.link;
        itemLink.classList.add("eventos-lista-item_link");

        li.appendChild(listaImagem);
        li.appendChild(itemTitulo);
        li.appendChild(itemData);
        li.appendChild(itemDescricao);
        li.appendChild(itemLink);

        listaDeEventos.appendChild(li);
    }
}

export default ui;