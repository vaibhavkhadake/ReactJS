import React from 'react';
import { Route ,Switch, BrowserRouter as Router } from 'react-router-dom'
//import { Route ,Switch,Link, BrowserRouter as Router } from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Calculator from './Component/Calculator';
import NameProps from './Component/NameProps';
import NameClassProps from './Component/NameClassProps';
import ClickCounter from './Component/ClickCounter';
import MouseHover from './Component/MouseHover';
import ClickCounter2 from './Component/ClickCounter2';
import MouseHover2 from './Component/MouseHovor2';
import RenderProps from './Component/RenderProps';
import Ref from './Component/Ref';
import FocusInputRef from './Component/FocusInputRef';
import ForwordParentComponentRef from './Component/ForwordParentComponebtRef';


function App() {
   return (
      <div>
      {/* <NameClassProps name="Amit"/> */}
      {/* <ClickCounter name="Vaibhav" />
      <MouseHover/>
      <ClickCounter2/>
      <MouseHover2/> */}
      {/* <RenderProps render={(isLoggedIn)=>isLoggedIn ? 'Vaibhav' : 'Guest' }/> */}

      {/* <RenderProps 
      render={
         (count , incrementCount)=>
         (
         <ClickCounter2 count={count} incrementCount={incrementCount}/>
         )
       } 
      />

      <RenderProps render={
         (count,incrementCount)=>
         (
            <MouseHover2 count={count} incrementCount={incrementCount} />
         )
      }
      /> */}

      {/* <Ref/> */}
      {/* <FocusInputRef/> */}
      <ForwordParentComponentRef />
      </div>
     
   //    <Router>
   //    <div>

      
   //   <Switch>
   //      <Route path="/" component={Register}  exact={true} />
   //      <Route path="/Home" component={Home} />
   //      <Route path="/Login" component={Login} />
   //      <Route path="/Component/Calculator" component={Calculator}/>
   //    </Switch>
      
   //       </div>
   //  </Router>


   );
}
export default App;

