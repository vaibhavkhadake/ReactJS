import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './forgetPassword.css'

import {Link} from 'react-router-dom'

class ForgetPassword extends Component
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

            this.setState({ field: field })
            console.log(field);


            this.props.history.push('/Login')
        }
    }
    isValid() {
        let field = this.state.field;
        let error = {};

        let isVal = true;

        if (!field["password"]) {
            isVal = false;
            error["password"] = "Please Enter Password";
        }
        if (typeof field["password"] !== "undefined") {
            if (!field["password"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/)) {
                // console.log(field["password"]);
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
                // console.log(field["repassword"]);
                isVal = false;
                error["repassword"] = "Please enter proper password minimum 8 digits";
            }
        }
        if ( field["password"] !== field["repassword"]) {
            isVal=false;
            error["repassword"]="Password and Repassword not matched "
        }


        this.setState({
            error: error
        })
        return isVal;
    }


render()
{
    return(
        <div className="main">
        <div className="forgot">
            <h2 style={{color:"red"}}>Change Password</h2>
             <TextField required
                        //id="standard-password-input"
                        label="Password"
                        //className={classes.textField}
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="current-password"
                        name="password"
                        value={this.state.field.password}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <div className="ErrorMessage">{this.state.error.password}</div>
                    <br />
                    <TextField required
                        //id="standard-password-input"
                        label="RePassword"
                        //className={classes.textField}
                        type="password"
                        placeholder="Enter RePassword"
                        autoComplete="current-password"
                        name="repassword"
                        value={this.state.field.repassword}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <div className="ErrorMessage">{this.state.error.repassword}</div>

                     <Button style={{color:"blue"}} variant="contained" color="inherit" onClick={this.submitForm} >Change Password</Button>
      <br/>
      <br/>
        <Link to={'/GoogleLogin'} className="nav-link"> Back to Login Page </Link>
        </div>

        </div>
    )
}
}
export default ForgetPassword;