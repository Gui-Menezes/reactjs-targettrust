import styled from "styled-components"


export const ContainerCard = styled.div`

display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 10px;

    .content {
        display: flex;
        justify-content: space-evenly;
        width: 400px;
    }

    .card {
        background: #fff;
        margin-bottom: 20px;
        margin-left: 10px;
        width: 400px;
        height: 440px;
        box-shadow: 0px 2px 23px rgba(66, 73, 98, 0.541);
        border-radius: 20px;
    }

    .mediaCard {
        padding: 5px 0;
        display: flex;
        justify-content: center;
    }

    .mediaCard img {
        background: center/cover;
        border-radius: 8px;
        height: 300px;
        width: 85%;
    }

    .topCard {
        display: flex;
        justify-content: center;
    }

    .topCard h2 {
        padding: 10px 0;
    }

    .bottomCard {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    p {
        padding: 0 20px;
        font-size: 20px;
        font-weight: bold;
    }

    .ano, .genero, .duracao, .nota, .votos {
        margin-top: 0;
        margin-bottom: 0;
        padding: 5px 0 0 20px;
    }

    .votos {
        margin-bottom: 10px;
    }

    .resumo{
        font-size: 20px;
    }
`;