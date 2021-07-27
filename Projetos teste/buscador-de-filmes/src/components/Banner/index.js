import React from 'react';
import './style.css'
import Bannergif from '../../img/banner/bannergif.gif'

function Banner() {

    return (
        <div className="slider">
            <img src={Bannergif} alt="banner" />
        </div>
    )
};

export default Banner;