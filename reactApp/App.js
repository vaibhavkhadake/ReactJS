 import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login';
import Register from './Register'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../materialapp/src/Home';

function App() {
   return (

      <Router>
      <div>
      <li><Link to={'/'} className="nav-link">  Register</Link></li>
      <li><Link to={'/Home'} className="nav-link">Home </Link></li>
      <li><Link to={'/Login'} className="nav-link"> Login </Link></li>
      <Switch>
        <Route path="/" component={Register} />
        <Route path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>


   );
}
export default App;

