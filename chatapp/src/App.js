import React from "react";
// import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/Register" component={Register} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/ResetPassword" component={ResetPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
