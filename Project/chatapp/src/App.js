import React from "react";
// import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/Register" component={Register} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/ResetPassword" component={ResetPassword} />
          <Route path="/Welcome" component={Welcome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
