import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./style/GlobalStyle";

import { Home } from "./pages/Home/index";
import { Posts } from "./pages/Posts/index";

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
      </Switch>
    </Router>
  );
}

export default App;
