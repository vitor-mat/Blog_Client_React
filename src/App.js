//Import do react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import do style global da aplicacao
import { GlobalStyle } from "./style/GlobalStyle";

//import das pages
import { Home } from "./pages/Home/index";
import { Posts } from "./pages/Posts/index";
import { Dashboard } from "./pages/Dashboard/index";

//import dos componentes
import { Cadastro } from "./components/Cadastro/index";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/dashboard/cadastrar">
          <Dashboard>
            <Cadastro />
          </Dashboard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
