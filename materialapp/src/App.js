import React from 'react';
import { Route ,Switch, BrowserRouter as Router } from 'react-router-dom'
//import { Route ,Switch,Link, BrowserRouter as Router } from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Calculator from './Component/Calculator';


function App() {
   return (

      <Router>
      <div>

      
     <Switch>
        <Route path="/" component={Register}  exact={true} />
        <Route path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Component/Calculator" component={Calculator}/>
      </Switch>
      
         </div>
    </Router>


   );
}
export default App;

