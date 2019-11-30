import React from "react";
// import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Welcome from "./Components/Welcome";
import Notification from "./Components/Notification";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/Register" component={Register} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/ResetPassword/:token" component={ResetPassword} />
        <Route path="/Notification" component={Notification} />
        <Route path="/Welcome" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
