import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import Logout from './Component/Logout';
import { Route ,Switch, BrowserRouter as Router } from 'react-router-dom'
import Notes from './Component/Notes';
import TakeANode from './Component/TakeANote';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import GooglePassword from './GoogleLogin/GooglePassword';
import CreateAccount from './GoogleLogin/CreateAccount';
import DisplayAllNotes from './Component/DisplayAllNotes';



function App() {
  return (
    <div className="App">
       <Router>
        <div>
           <Switch>
           <Route path="/" component={Dashboard}  exact={true} />
           <Route path="/Notes" component={Notes}/>
           <Route path="/Logout" component={Logout}/>
           <Route path="/TakeANode" component={TakeANode}/>
           <Route path="/GoogleLogin" component={GoogleLogin}/>
           <Route path="/GooglePassword" component={GooglePassword}/>
           <Route path="/CreateAccount" component={CreateAccount}/>
           <Route path="/DisplayAllNotes" component={DisplayAllNotes}/>
          </Switch>
        </div> 
  </Router>

    </div>
  
  );
}

export default App;
