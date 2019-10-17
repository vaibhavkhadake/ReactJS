import React ,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
class Login extends Component
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
            field["firstName"] = "";
            field["password"] = "";

            this.setState({ field: field })
            console.log(field);


            this.props.history.push('/Home')
        }

    }

    isValid() {
        let field = this.state.field;
        let error = {};

        let isVal = true;

        if (!field["firstName"]) {
            isVal = false;
            error["firstName"] = "Please enter User Name";
        }
        if (typeof field["firstName"] !== "undefined") {
            if (!field["firstName"].match(/^[a-zA-Z]*$/)) {
                isVal = false;
                error["firstName"] = "Please Enter only alphabets only";
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

    render()
    {
        return(
            <div>

                <h2>Login Form</h2>
        <TextField required
        //id="standard-required"
        label="UserName"
        placeholder="Enter User Name"
       name="firstName"
        // className={classes.textField}
        value={this.state.field.firstName}
        onChange={this.handleChange}
        margin="normal"
        />
        <div className="ErrorMessage">{this.state.error.firstName}</div>
       <br/>
        <TextField required
        //id="standard-password-input"
        label="Password"
        name="password"
        //className={classes.textField}
        type="password"
        placeholder="Enter Password"
        value={this.state.field.password}
        onChange={this.handleChange}
        autoComplete="current-password"
        margin="normal"
      />
      <div className="ErrorMessage">{this.state.error.password}</div>
       <br/>

      <Button variant="contained" color="inherit" onClick={this.submitForm} >Login</Button>
      <br/>
      <br/>
      <Link to={'/'} className="nav-link"> Click here to Register New User </Link>
            </div>


        )
    }
}
export default Login 