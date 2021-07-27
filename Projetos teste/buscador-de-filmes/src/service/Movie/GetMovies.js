import { api } from "../../config";

async function GetMovies(movie){
    try {
        const response = await api.get (`/?apikey=994f918b&s=${movie}`);

        return response.data.Search;

    } catch (error) {
        alert(error);
    }
};

export default GetMovies;