import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom"
import GetMovies from '../../service/Movie/GetMovies';

// import { Container } from './styles';

function Home() {

    const [data, setData] = useState([]);

    const GetDataMovies = async() => {
        const response = await GetMovies("hulk");
        setData(response);
    }

    useEffect(() => {
        GetDataMovies();
    },[]);


    return (
    <div>
        <h1>Home</h1>

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
    </div>
    )
}

export default Home;