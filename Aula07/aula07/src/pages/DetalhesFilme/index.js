import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../../components/Card';
import GetDetalhesFilme from '../../service/Filme/GetDetalhesFilme';

import { Container } from './styled';

function DetalhesFilme() {
    const [data, setData] = useState({});
    const params = useParams();

    // const getDetalhes = async () => {
    //     const response = await GetDetalhesFilme(params.id);
    //     setData(response);
    // }
    // getDetalhes();

    useEffect(() => {
        async function getDetalhes() {
            const response = await GetDetalhesFilme(params.id);
            setData(response);
        }
        getDetalhes();
    },[]);

    return (
        <Container>
            <Card data={data} />
        </Container>
    )
}

export default DetalhesFilme;