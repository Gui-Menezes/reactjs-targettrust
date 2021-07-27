import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input"
import GetFilmes from "../../service/Filme/GetFilmes";
import { ContainerCard } from "./styled"

function Filmes() {
    const [name, setName] = useState("");
    const [filme, setFilme] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        mostraFilmes(name);
    }

    const mostraFilmes = async (value = "avengers") => {
        const response = await GetFilmes(value);
        setFilme(response);
    }

    useEffect(() => {
        mostraFilmes();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input id="name"
                placeholder="Informe seu filme"
                type="text"
                value={name}
                setValue={setName}
                />
                <CustomButton>Buscar</CustomButton>
            </form>

            <ContainerCard>
                {filme.map(({Title, Poster, Year, Type, imdbID}) => {
                    return (
                        <div key={imdbID}>
                            <div className="content">
                                <div className="card">
                                    <div className="topCard">
                                        <h2 className="titulo">{Title}</h2>
                                    </div>
                                    <div className="mediaCard">
                                        <img src={Poster} alt={Title} />
                                    </div>
                                    <div className="bottomCard">
                                        <p className="ano">Ano: {Year}</p>
                                        <p className="tipo">Tipo: {Type}</p>
                                    </div>
                                    <CustomButton link route={`/Filmes/${imdbID}`}>Saiba Mais</CustomButton>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ContainerCard>
    
        </div>

    )
}

export default Filmes;