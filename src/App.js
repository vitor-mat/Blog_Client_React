//Import do react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importando o contexto
import { EditPostsContext } from "./context/EditPostsContext";
import { AllSiteAccessContext } from "./context/AllSiteAccessContext";

//import do style global da aplicacao
import { GlobalStyle } from "./style/GlobalStyle";

//import das pages
import { Home } from "./pages/Home/index";
import { Posts } from "./pages/Posts/index";
import { Dashboard } from "./pages/Dashboard/index";

//import dos componentes
import { FormCadastrarPostagens } from "./components/Form_Cadastrar_Postagens/index";
import { FormEditarPostagens } from "./components/Form_Editar_Postagens/index";
import { PostsDashboard } from "./components/Posts_Dashboard/index";
import { Status } from "./components/Status/index";
import { useEffect } from "react";

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <AllSiteAccessContext>
        <EditPostsContext>
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
                <FormCadastrarPostagens/>
              </Dashboard>
            </Route>
            <Route exact path="/dashboard/posts">
              <Dashboard>
                <PostsDashboard />
              </Dashboard>
            </Route>
            <Route path="/dashboard/posts/editar">
              <Dashboard>
                <FormEditarPostagens/>
              </Dashboard>
            </Route>
          </Switch>
        </EditPostsContext>
      </AllSiteAccessContext>
    </Router>
  );
}

export default App;
