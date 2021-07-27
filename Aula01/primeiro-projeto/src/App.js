import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";

const links = [
  {
    id: "1",
    label: "Início"
  },
  {
    id: "2",
    label: "Meio"
  },
  {
    id: "3",
    label: "Fim"
  },
  {
    id: "4",
    label: "Mais Um"
  },
];

function App() {
  return (
    <div className="container">

        <Header listaLink={links}/>
        <Button label="Primeiro Botão" cor="azul"/>
        <Button label="Segundo Botão" cor="vermelho"/>
        <Button label="Terceiro Botão" cor="vermelho"/>
        {/* <MainNav />
        <Button label ="Clica aqui 2" type={true} /> */}
    </div>
  );
}


// const Button = ({label, type}) => {
//   return (
//     <button className={type ? "active" : "inativo"}>{label}</button>
//   )
// };

// const MainNav = () => { 
//   return (
//     <nav>
//       <a href>Link 1</a>
//       <Button label="Login" type={false} />
//     </nav>
//   );
// };

export default App;
