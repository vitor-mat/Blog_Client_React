import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./style/GlobalStyle";

import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
