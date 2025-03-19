const requisicao = "https://phcorrea-hash.github.io/listaDeEventos.json";

const api = {
    async buscarEventos() {
        try {
            const response = await axios.get(requisicao);
            return await response.data;
            
        } catch {
            alert("Erro ao buscar evento");
            throw error;
        }
    },

    async buscarEventoPorId(id) {
        try {
            const response = await axios.get(`${requisicao}/${id}`);
            return await response.data;
        } catch {
            alert ("Erro ao buscar evento");
            throw error;
        }
    },

    async buscarEventoPorTermo(termo) {
        try {
            const eventos = await this.buscarEventos();
            const termoEmMinusculas = termo.toLowerCase();

            const eventosFiltrados = eventos.filter(evento => {
                return (evento.titulo.toLowerCase().includes(termoEmMinusculas)) ||
                evento.descricao.toLowerCase().includes(termoEmMinusculas) ||
                evento.local.toLowerCase().includes(termoEmMinusculas) ||
                evento.data.toLowerCase().includes(termoEmMinusculas) ||
                evento.cidade.toLowerCase().includes(termoEmMinusculas);
            })

            return eventosFiltrados;

        } catch (error) {
            alert("Erro ao filtrar eventos");
            throw error;
        }
    }
}

export default api;

