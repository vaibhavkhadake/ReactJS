import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route  path="/Dashboard" component={Dashboard} />

        </Switch></Router>
      
    </React.Fragment>
  );
}

export default App;
