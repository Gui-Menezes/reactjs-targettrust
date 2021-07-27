import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function Home () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            email,
            password
        }

        console.log("Valor: ", data);
    }

    const handleSubmitTeste = (valor) => {
        console.log("Valor cálculo: ", valor);
    }

    return (
    <div>
        <h1>Home</h1>
        <form onSubmit={handleSubmit}>
            <Input label="Nome" id="nome" value={name} setValue={setName}/>
            <Input type="email" label="E-mail" id="email" value={email} setValue={setEmail} required/>
            <Input label="Senha" id="password" value={password} setValue={setPassword}/>
            <Button onClick={()=> handleSubmitTeste(3*3)}>Enviar</Button>
        </form>
    </div>
    )
}

export default Home;