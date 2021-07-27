import styled from "styled-components";

export const Container = styled.div`

padding: 15px;

    .card {
        background: #fff;
        margin-bottom: 20px;
        margin-left: 10px;
        width: 500px;
        box-shadow: 0px 2px 23px rgba(66, 73, 98, 0.541);
        border-radius: 20px;
    }

    .mediaCard img {
        background: center/cover;
        height: 300px;
        width: 100%;
    }

    .topCard h2 {
        padding: 10px 20px;
    }

    p {
        padding: 8px 20px;
        font-size: 20px;
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