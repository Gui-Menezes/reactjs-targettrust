import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/produtos">
          <Produtos />
        </Route>
      </Switch>
    </BrowserRouter>  

  );
}

export default App;
