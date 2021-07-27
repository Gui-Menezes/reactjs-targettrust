import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

/*  -------Tirando todas as margens de todos os itens ------ */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

img {
    width: 100%;
    height: 100%;
}

`;


export default GlobalStyle;