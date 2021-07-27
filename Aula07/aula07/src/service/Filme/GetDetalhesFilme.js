import { api } from "../../config";

async function GetDetalhesFilme(idFilme) {
    try {
        const response = await api.get(`/?apikey=994f918b&i=${idFilme}`)
        return response.data;

    } catch (error) {
        alert(error);
    }
};

export default GetDetalhesFilme;