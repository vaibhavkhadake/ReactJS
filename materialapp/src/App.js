import React from 'react';
import { Route ,Switch, BrowserRouter as Router } from 'react-router-dom'
//import { Route ,Switch,Link, BrowserRouter as Router } from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Calculator from './Component/Calculator';

import GoogleLogin from './GoogleLogin/GoogleLogin';
import LearnMore from './GoogleLogin/LearnMore';
import GooglePassword from './GoogleLogin/GooglePassword';
import CreateAccount from './GoogleLogin/CreateAccount';
import ForgetPassword from './GoogleLogin/ForgetPassword';
import GoogleForgetPassword from './GoogleLogin/GoogleForgetPassword';
// import NameProps from './Component/NameProps';
// import NameClassProps from './Component/NameClassProps';
// import ClickCounter from './Component/ClickCounter';
// import MouseHover from './Component/MouseHover';
// import ClickCounter2 from './Component/ClickCounter2';
// import MouseHover2 from './Component/MouseHovor2';
// import RenderProps from './Component/RenderProps';
// import Ref from './Component/Ref';
// import FocusInputRef from './Component/FocusInputRef';
// import ForwordParentComponentRef from './Component/ForwordParentComponebtRef';
// import { UserProvider } from './Component/Context/UserContext';
// import ComponentA from './Component/Context/ComponentA';


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
      {/* <ForwordParentComponentRef /> */}
      {/* <UserProvider value="Vaibhav">
         <ComponentA/>
      </UserProvider>
      </div> */}
     
       {/* <Router> 
      <div>

      
     <Switch>
        { 
        <Route path="/" component={Register}  exact={true} />
        <Route path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Component/Calculator" component={Calculator}/>
        <Route path="/ForgetPassword" component={ForgetPassword}/> 
        </switch>
       }
      </div> 
    </Router>  */}


    <Router>
       <div>

{/* <GoogleForgetPassword/> */}
          <switch>
          <Route path="/GoogleLogin" component={GoogleLogin}  exact={true} />
          <Route path="/LearnMore" component={LearnMore} />
          <Route path="/GooglePassword" component={GooglePassword} />
          <Route path="/CreateAccount" component={CreateAccount} />
          <Route path="./ForgetPassword" component={ForgetPassword}/>
          <Route path="./GoogleForgetPassword" component={GoogleForgetPassword}/>
          </switch>
       </div>
      
    </Router>

</div>
   );
}
export default App;

