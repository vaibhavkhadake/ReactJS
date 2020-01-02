import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Product from "./Component/Product";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Product" component={Product} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
