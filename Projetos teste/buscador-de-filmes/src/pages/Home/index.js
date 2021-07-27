import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import GetMovies from '../../service/Movie/GetMovies';

function Home() {
    const [data, setData] = useState([]);

    const GetDataMovies = async () => {
        const response = await GetMovies("hulk");
        // console.log("Response HOME >>", response);
        setData(response);
    }

    useEffect(() => {
        GetDataMovies();
    }, []);

    return (
        <>
        <h1>HOME</h1>

        <div>
            {data.map((item) => {
                return (
                    <div key={item.imdbID}>
                        <h1>{item.Title}</h1>
                        <NavLink to={`/movie/${item.imdbID}`}>Saiba Mais</NavLink>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Home;