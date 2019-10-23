import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './GooglePassword.css'
import {Link} from 'react-router-dom'


class GooglePassword extends Component
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

            this.setState({ field: field })
            console.log(field);


            this.props.history.push('/LearnMore')
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
        this.setState({
            error: error
        })
        return isVal;
    }
    render()
    {
        return(
            <div className="container2">
                 <h2 style={{color:'red'}}>Google</h2>
                <br/>
                <h1>Welcome</h1>
                <br/>
                <TextField required
                        
                        label="Password"
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
                    { <Link to={'/ForgetPassword'} className="nav-link">Forget Password </Link> } <br /> <br />
                     <Button className="registerButton"  variant="contained" color="primary" onClick={this.submitForm} > Next</Button>

             </div>
        )
    }
}
export default GooglePassword