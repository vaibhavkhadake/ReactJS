import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            error: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };
    login=()=>{
        console.log("Logout Successfull");
        this.props.history.push('/Login');
      }

    handleChange(event) {
        let field = this.state.field;
        field[event.target.name] = event.target.value;
        this.setState({ field })
    }

    submitForm(event) {
        event.preventDefault();
        if (this.isValid()) {
            let field = {};
            field["firstName"] = "";
            field["lastName"] = "";
            field["mobileNumber"] = "";
            field["password"] = "";
            
            this.setState({ field: field})
            console.log(field);


            this.props.history.push('/Login')
        }

    }

    isValid() {
        let field = this.state.field;
        let error = {};

        let isVal = true;

        if (!field["firstName"]) {
            isVal = false;
            error["firstName"] = "Please enter First Name";
        }
        if (typeof field["firstName"] !== "undefined") {
            if (!field["firstName"].match(/^[a-zA-Z]*$/)) {
                isVal = false;
                error["firstName"] = "Please Enter only alphabets only";
            }
        }
        if (!field["lastName"]) {
            isVal = false;
            error["lastName"] = "Please enter Last Name";
        }
        if (typeof field["lastName"] !== "undefined") {
            if (!field["lastName"].match(/^[a-zA-Z]*$/)) {
                isVal = false;
                error["lastName"] = "Please Enter only alphabets only";
            }
        }

        if (!field["mobileNumber"]) {
            isVal = false;
            error["mobileNumber"] = "Please enter mobile Number";
        }
        if (typeof field["mobileNumber"] !== "undefined") {
            if (!field["mobileNumber"].match(/^[789][0-9]{9}$/)) {
                isVal = false;
                error["mobileNumber"] = "Please enter valid mobile number ";
            }
        }

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

        this.setState({
            error: error
        })
        return isVal;
    }

    render() {

        return (
            <div>
               

                <h2>Registration Form </h2>
                <form method="get" name="registerForm">
                    <TextField required
                        // id="standard-required"
                        label="First Name"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={this.state.field.firstName}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <div className="ErrorMessage">{this.state.error.firstName}</div>
                    <br />
                    <TextField required
                        //id="standard-required"
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={this.state.field.lastName}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <div className="ErrorMessage">{this.state.error.lastName}</div>
                    <br />
                    <TextField required
                        //id="standard-required"
                        label="Mobile Number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number "
                        value={this.state.field.mobileNumber}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <div className="ErrorMessage">{this.state.error.mobileNumber}</div>
                    <br />
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

                    <Button variant="contained" color="primary" onClick={this.submitForm} >Register</Button>
                    <br/>
                    <br/>

                    <Link to={'/Login'} className="nav-link"> Already Register Click here to Login</Link>
          

                </form>
            </div>


        )
    }
}
export default Register;