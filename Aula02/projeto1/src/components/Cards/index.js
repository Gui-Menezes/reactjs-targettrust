import "./style.css";

const Cards = ({listaItens}) => {
    console.log(listaItens);
    return (
        <div className="content">
            <div className="card">
                <div className="topCard">
                    <h2 className="nome-praia">{listaItens.nome}</h2>
                    <div className="foto-praia">
                        <img src={listaItens.imagem} alt="foto-da-praia"></img>
                    </div>
                    <div className="bottomCard">
                        <p>Casa: {listaItens.casa}</p>
                        <p>Custo para entrar: {listaItens.custo}</p>
                        <p>Comida: {listaItens.comida}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Cards;