import "./style.css"

const Header = ({listaLink}) => {

return (
    <div className="container-header">
    <div>
        <h1>LOGO</h1>
    </div>
    <ul className="estilo-tabela">
        {
        listaLink.map((link) => {
            return <li key={link.id}>{link.label}</li>
        })
        }
    </ul>
    </div>
);
};

export default Header;