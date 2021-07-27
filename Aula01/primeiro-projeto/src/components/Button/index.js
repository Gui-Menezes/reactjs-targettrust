import "./style.css";

const Button = (props) => {

// let corBotao = '';

// if(props.cor === "azul") {
//   corBotao = "botao-custom-azul";
// } else {
//   corBotao = "botao-custom-vermelho";
// }

return (
    <div className="container-botao">
    <button className={props.cor === "azul" ? "botao-custom-azul" : "botao-custom-vermelho"}>
        {props.label}
    </button>
    </div>
);
};

export default Button;