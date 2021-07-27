import React from 'react';
import { NavLink } from 'react-router-dom';

import { LinkSaibaMais } from './styled';

function CustomButton({children, link, route, ...props}) {
    return (
        <>
        {
            link ? (
            <LinkSaibaMais to={route}>{children}</LinkSaibaMais> 
            ) : (
            <button {...props}>{children}</button>
            )
        }
        </>
    )
}

export default CustomButton; 