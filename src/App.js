//Import do react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import do style global da aplicacao
import { GlobalStyle } from "./style/GlobalStyle";

//import das pages
import { Home } from "./pages/Home/index";
import { Posts } from "./pages/Posts/index";
import { Dashboard } from "./pages/Dashboard/index";

//import dos componentes
import { Form } from "./components/Form_Postagem/index";
import { PostsDashboard } from "./components/Posts_Dashboard/index";
import { Status } from "./components/Status/index";

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
        <Route exact path="/dashboard">
          <Dashboard>
            <Status />
          </Dashboard>
        </Route>
        <Route path="/dashboard/status">
          <Dashboard>
            <Status />
          </Dashboard>
        </Route>
        <Route path="/dashboard/cadastrar">
          <Dashboard>
            <Form purpose="Cadastrar"/>
          </Dashboard>
        </Route>
        <Route exact path="/dashboard/posts">
          <Dashboard>
            <PostsDashboard />
          </Dashboard>
        </Route>
        <Route path="/dashboard/posts/editar">
          <Dashboard>
            <Form purpose="Editar" />
          </Dashboard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
