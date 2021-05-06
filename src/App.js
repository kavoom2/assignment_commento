import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={undefined} exact />
        <Route path="/2" component={undefined} />
      </Switch>
    </Router>
  );
}

export default App;
