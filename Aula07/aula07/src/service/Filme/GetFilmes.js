import { api } from '../../config';

async function GetFilmes(filme) {
    try {
        const response = await api.get(`/?apikey=994f918b&s=${filme}`);

        return response.data.Search;
        
    } catch (error) {
        alert("Você digitou algo errado. Tente novamente.")
    }
};

export default GetFilmes;