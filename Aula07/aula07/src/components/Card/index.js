import React from 'react';

import { Container } from './styled';

function Card({data}) {
    const {Title, Plot, Poster, Genre, Runtime, imdbID, imdbRating, imdbVotes, Released} = data;
    return (
        <Container>
            <div className="card">
                <div className="topCard">
                    <h2 className="titulo">{Title}</h2>
                    <p className="resumo">{Plot}</p>
                </div>

                <div className="mediaCard">
                    <img src={Poster} alt={Title} />
                </div>

                <div className="bottomCard">
                    <p className="ano">Lançamento: {Released}</p>
                    <p className="genero">Gênero: {Genre}</p>
                    <p className="duracao">Duração: {Runtime}</p>
                    <p className="nota">Nota: {imdbRating}</p>
                    <p className="votos">Votos: {imdbVotes}</p>
                </div>
            </div>
        </Container>
    )
};

export default Card;