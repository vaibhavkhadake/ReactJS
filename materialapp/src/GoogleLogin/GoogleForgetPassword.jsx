import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './forgetPassword.css'
import {Link} from 'react-router-dom'

class GoogleForgetPassword extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            error: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };
    
    handleChange(event) {
        let field = this.state.field;
        field[event.target.name] = event.target.value;
        this.setState({ field })
    }

    submitForm(event) {
        event.preventDefault();
        if (this.isValid()) {
            let field = {};
            field["password"] = "";
            field["repassword"] = "";
            
            this.setState({ field: field})
            console.log(field);
            this.props.history.push('/GoogleLogin')
        }

    }

    isValid() {
        let field = this.state.field;
        let error = {};

        let isVal = true;
        if (!field["password"]) {
            isVal = false;
            error["password"] = "Please enter Password";
        }
        if (typeof field["password"] !== "undefined") {
            if (!field["password"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/)) {
                isVal = false;
                error["password"] = "Please enter proper password minimum 8 digits";
            }
        }
        if (!field["repassword"]) {
            isVal = false;
            error["repassword"] = "Please enter Password";
        }
        if (typeof field["repassword"] !== "undefined") {
            if (!field["repassword"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/)) {
                isVal = false;
                error["repassword"] = "Please enter proper password minimum 8 digits";
            }
        }

        this.setState({
            error: error
        })
        return isVal;
    }

render()
{
    return(
        
            
                 <div className="container">
                <h2 align="center" ><span style={{color:'blue'}}>G</span>
                <span style={{color:'red'}}>O</span>
                <span style={{color:'yellow'}}>O</span>
                <span style={{color:'blue'}}>G</span>
                <span style={{color:'green'}}>L</span>
                <span style={{color:'red'}}>E</span></h2>
                <br/>
                <h2 style={{color:'brown'}} align="center">Create your Google Account</h2>

               
     
      
     <div className="password">
     
     <TextField
        id="outlined-password-input"
        label="Password"
       
        type="password"
        name="password"
        value={this.state.field.password}
        onChange={this.handleChange}
        margin="normal"
        variant="outlined"
      />
         <TextField
        id="outlined-password-input"
        label="Re-Type-Password"
       
        type="password"
        name="repassword"
        value={this.state.field.repassword}
        onChange={this.handleChange}
        autoComplete="current-password"
        margin="normal" 
        variant="outlined"
      />
       <span className="ErrorMessage">{this.state.error.password}</span>
       <span className="ErrorMessage">{this.state.error.repassword}</span>
               </div>     
                 
     
     <div  className="registerButton2" >

<Button variant="contained" color="primary" onClick={this.submitForm} > Submit </Button>
</div> 
 </div>

    )
}
}
export default GoogleForgetPassword