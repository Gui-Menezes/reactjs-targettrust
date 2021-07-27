import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import Filmes from '../pages/Filmes';
import DetalhesFilme from '../pages/DetalhesFilme';
import Sobre from '../pages/Sobre';
import TopMovie from '../pages/TopMovie';

// import { Container } from './styles';

function Routes() {
    return (
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/Filmes">
                <Filmes />
            </Route>
                <Route path="/Filmes/:id">
            <DetalhesFilme />
        </Route>

            <Route exact path="/Topmovie">
                <TopMovie />
            </Route>
            <Route exact path="/Sobre">
                <Sobre />
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Routes;