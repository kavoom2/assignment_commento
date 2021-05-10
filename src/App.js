import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  matchPath,
} from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import "./scss/index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={`/:id`} component={MainPage} />
        <Route component={undefined} />
      </Switch>
    </Router>
  );
}

export default App;
