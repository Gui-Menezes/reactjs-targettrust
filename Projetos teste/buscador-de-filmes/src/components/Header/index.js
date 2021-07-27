import './style.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../img/logo.png"
import Rise from "../../img/rising.png"

function Header() {
    return (
        <div className="header-container">
            <NavLink to="/"><img className ="logo" src={Logo} alt="logo"/></NavLink>
            <div className="nav-links">
                <NavLink className ="links" to="/topfilmes"><img src={Rise} alt="rising" />Top Filmes</NavLink>
                <NavLink className ="links" to="/filmes">Filmes</NavLink>
                <NavLink className ="links" to="/mais">Mais</NavLink>
                <NavLink className ="login" to="/login">LOGIN</NavLink>
            </div>
        </div>
    )
    
}

export default Header;