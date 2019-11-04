import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import Logout from './Component/Logout';
import { Route ,Switch, BrowserRouter as Router } from 'react-router-dom'
import Notes from './Component/Notes';
import TakeANode from './Component/TakeANote';


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
          </Switch>
        </div>
      
  </Router>

      {/* <Dashboard/> */}

    </div>
  );
}

export default App;
