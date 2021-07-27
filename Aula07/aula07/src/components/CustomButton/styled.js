import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const LinkSaibaMais = styled(NavLink)`
    text-decoration: none;
    margin: 135px;
    font-size: 20px;
    padding: 6px;
    font-weight: bold;
    color: white;
    background-color: red;
    border-radius: 8px;

    :hover {
        color: black;
    }
`;