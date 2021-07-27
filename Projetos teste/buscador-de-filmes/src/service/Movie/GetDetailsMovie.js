import { api } from "../../config";


async function GetDetailsMovie (idMovie) {
    try {
        const response = await api.get(`/?apikey=994f918b&i=${idMovie}`)

        console.log("response.data >>>", response.data);
        return response.data

    } catch (error) {
        alert(error);
    }
};

export default GetDetailsMovie;