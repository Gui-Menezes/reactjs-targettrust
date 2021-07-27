import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import GetDetailsMovie from '../../service/Movie/GetDetailsMovie';

function MovieDetails() {
    const [data, setData] = useState({});
    const params = useParams();
    console.log("PARAMS >>",params);

    useEffect(() => {
        async function getDetails() {
            const response = await GetDetailsMovie(params.id);
            setData(response);
            console.log("Response do getDetails >>>", response);
        }
        getDetails();
    },[]);

    return (
        <div>
            <h1>Detalhes</h1>
            <Card data={data} />
        </div>
    )
}

export default MovieDetails;