import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Modal from "./pages/Modal";
import "./scss/index.scss";

function App() {
  const modalStatus = useSelector((s) => s.modalStatusReducer.modalStatus);

  return (
    <React.Fragment>
      {modalStatus ? <Modal /> : ""}
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path={`/:id`} component={MainPage} />
          <Route component={undefined} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
