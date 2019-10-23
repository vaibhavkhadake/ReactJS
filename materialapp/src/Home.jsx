import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import ListDemo from './ListDemo';
// import Calculator from './Component/Calculator';
// import TemperatureInput from './Component/TemperatureInput';

var array=[1,2,3,4,5,6,7];

class Home extends Component {
  logout=()=>{
    console.log("Logout Successfull");
    this.props.history.push('/Login');
  }
  
  render() {
    return (
        <div>
           <Button style={{float:'right'}} variant="contained" color="secondary" onClick={this.logout} >Logout</Button>
          <h2>Home</h2>
          
               <li> <Link to={'/'} >  Register</Link></li>
               <li><Link to={'/Home'} >Home </Link></li> 
               <li> <Link to={'/Login'} > Login </Link></li> 
            
          <h4>Login Successfully</h4>
         
          <ListDemo menuitems={array} />
          {/* <Calculator/> */}
          {/* <TemperatureInput /> */}
        </div>
    );
  }
}

export default Home;