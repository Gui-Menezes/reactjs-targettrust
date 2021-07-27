import "./style.css"
import LogoSol from "./img/logo-sol.png";

const Header = ({listaLink}) => {

return (
    <div className="container-header">
        <div className="logo">
            <a href="#"><img src={LogoSol} alt="logo-sol"></img></a>
        </div>
        <ul className="estilo-tabela">
            {
            listaLink.map((link) => {
                return <a key={link.id}>{link.label}</a>
            })
            }
        </ul>
    </div>
);
};

export default Header;
